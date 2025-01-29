<script>
import RadarChartJs from '@/components/RadarChartJs.vue'
import HeightWeightMesure from '@/components/HeightWeightMesure.vue'
import DashboardPaginationBloc from '@/components/DashboardPaginationBloc.vue'
import ApiService from '@/services/api.services.js'


export default {
    components: {
        RadarChartJs,
        HeightWeightMesure,
        DashboardPaginationBloc,
    },
   async mounted() {
        if (!this.isAuthenticated) {
            this.$router.push('/signinPatient')
        } else {
            if(this.isDoctor) {
                this.$router.push('/doctors-dashboard')
            } else if(!this.isPatient) {
                this.$router.push('/hospitals-dashboard')
            }

            await this.getSymptoms();
            await this.getPatientMedicalInformation();
            await this.getPatientConsultations();
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.AuthenticationModule.status.isAuthenticated;
        },
    
        isPatient() {
            return this.$store.state.AuthenticationModule.user ? this.$store.state.AuthenticationModule.user.role == 'patient' : null;
        },

        isDoctor() {
            return this.$store.state.AuthenticationModule.user ? this.$store.state.AuthenticationModule.user.role == 'medecin' : null;
        },
        patientImc() {
            const imc = this.patientMedicalInformation ? this.patientMedicalInformation.taille / this.patientMedicalInformation.poids : null;
            return imc ? imc.toFixed(2) : null;
        },
        totalPages() {
            return Math.ceil(this.consultations.length / 10)
        },
    },
    methods: {
        async getPatientConsultations() {
            ApiService.setHeader();
            const response = await ApiService.get(`/consultation/patient/47/`);
            // const response = await ApiService.get(`/consultation/patient/${this.$store.state.AuthenticationModule.user.id}/`);
            this.consultations = response.data;
        },

        getPaginatedItems() {
            const start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
            const end = start + this.pagination.itemsPerPage;
            return this.consultations.slice(start, end);
        },

        async getPatientMedicalInformation() {
            ApiService.setHeader();
            const response = await ApiService.get(`/dossier/patient/47/`);
            // const response = await ApiService.get(`/dossier/patient/${this.$store.state.AuthenticationModule.user.id}/`);
            this.patientMedicalInformation = response.data;
        },

        async getSymptoms() {
            ApiService.setHeader();
            const response = await ApiService.get(`/symptome/`);
            this.symptoms = response.data;
        },

        formatDateTimeInEnglish(dateTimeString) {
            const options = {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            };
            const formattedDateTime = new Date(dateTimeString).toLocaleString("en-US", options);
            return formattedDateTime;
        },

        goToPage(page) {
            this.pagination.currentPage = page;
        },

        generateRadarChartData() {
            const datasets = [];
            const colors = ["#100DB1", "#FECA57", "#763CEF", "#2798F7", "#F80D38"];
            const data = [[5, 10, 15, 20, 25, 30], [28, 48, 40, 19, 96, 27,], [15, 20, 25, 30, 35, 45], [65, 59, 90, 81, 56, 55,], [70, 80, 90, 81, 100, 105], ]
            if (this.symptoms.length > 0) {
                for (let i = 0; i < 5 && i < this.symptoms.length; i++) {
                const symptom = this.symptoms[i];
                const color = colors[i];
                datasets.push({
                    label: symptom.nom,
                    data: data[i],
                    borderColor: color,
                    backgroundColor: color,
                });
                }
                return datasets;
            }
            return [];
        }
    },
    data() {
        return {
            RadarChartJs,
            consultations: [],
            symptoms: [],
            patientMedicalInformation: null,
            pagination: {
                currentPage: 1,
                itemsPerPage: 10,
            },
            filterPerDayWeekMonth: 'month',
        }
    },
}
</script>

<template>
    <!-- Pour integrer avec le layout, il a fallu w-[85%] ml-[15%] mt-24 -->
    <main class="min-h-screen z-40 overflow-hidden w-[85%] ml-[15%] mt-24 p-5" style="background-color: #F5F7FA; font-family: 'Poppins', sans-serif; font-weight: 300; font-style: normal;">
        <section class="flex flex-row flex-lg-nowrap flex-wrap justify-between mb-12 w-full gap-5">
            <div class="rounded-lg p-4 min-h-96 lg:min-w-[400px] min-w-[450px] bg-white shadow-lg mx-auto" id="tendency">
                <h4 class="text-secondary text-xl font-bold">TENDANCES DES MALADIES</h4>
                <radar-chart-js :radarChartDatasets="generateRadarChartData()" :key="symptoms"/>
            </div>
            <div class="flex flex-col justify-center rounded-lg p-12 min-h-96 min-w-[500px] grow shadow-lg" id="imc_calculator">
                <div class="flex flex-row mb-16">
                    <h4 class="text-white lg:text-3xl text-2xl mr-auto my-auto">Calculateur d’IMC</h4>
                    <select class="px-1 py-3 lg:min-w-80 min-w-64 rounded-lg text-white border border-white text-center bg-inherit justify-self-end outline-0">
                        <option value="">Semaine Passée</option>
                    </select>
                </div>
                <div class="flex flex-row lg:flex-nowrap flex-wrap gap-5">
                    <div class="flex lg:flex-col flex-row lg:flex-nowrap flex-wrap gap-5 grow">
                        <Height-weight-mesure mesureName="Taille" :mesureValue="patientMedicalInformation ? patientMedicalInformation.taille + 'cm' : ''"/>
                        <Height-weight-mesure mesureName="Poids" :mesureValue="patientMedicalInformation ? patientMedicalInformation?.poids + 'kg' : ''" style="background-color: #D0FBFF"/>
                    </div>
                    <div class="grow rounded-lg py-6 px-10" style="background-color: #E7EDFF">
                        <span class="block mb-5 text-2xl">Indice de Masse Corporelle (IMC)</span>
                        <div class="flex flex-row justify-between mb-8">
                            <span class="block text-xl self-center">{{ patientImc }}</span>
                            <span class="block py-3 px-5 rounded-xl font-normal" style="background-color: #D6FFDD">Vous êtes en bonne santé</span>
                        </div>
                        <div class="w-full" id="hint">
                            <span></span>
                            <span class="block w-6 h-3 border-2 border-black rounded-3xl mb-2 ml-[62.25%]" style="background-color: #D16564;"></span>
                            <span class="block h-5 w-full rounded-3xl mb-2"></span>
                            <div class="flex flex-row justify-between font-bold">
                                <span>0</span>
                                <span>10</span>
                                <span>20</span>
                                <span>30</span>
                                <span>40</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full shadow-lg rounded-lg bg-white p-4">
            <h1 class="text-2xl font-bold mb-12" style="color: #343C6A;">Consultation passée</h1>
            <div class="flex flex-row flex-wrap gap-x-8 gap-y-5 mx-5 mb-12" id="filtering-section">
                <div class="w-auto" id="watch">
                    <label class="text-md font-bold text-secondary mr-3" for="montre">Montre</label>
                    <select class="px-1 py-3 min-w-24 rounded-lg bg-white text-secondary outline-0" id="montre">
                        <option value="">12</option>
                        <option value="">11</option>
                        <option value="">10</option>
                    </select>
                </div>
                <div class="grow min-w-80" id="month">
                    <select class="px-1 py-3 w-full rounded-lg bg-white text-secondary outline-0">
                        <option value="">Ce mois: Janvier</option>
                        <option value="">Ce mois: Février</option>
                        <option value="">Ce mois: Mars</option>
                    </select>
                </div>
                <div class="min-w-[400px] grow" id="search">
                    <input class="px-1 py-3 indent-2  w-full rounded-lg bg-white text-secondary outline-0" type="search" name="" value="" placeholder="Recherche de médecins par nom ou par titre">
                </div>
                <div class="min-w-[400px] grow grid grid-cols-3 grid-rows-1 rounded-lg" id="OtherOption">
                    <span @click="filterPerDayWeekMonth = 'day'" class="block py-3 px-2 rounded-l-lg text-md font-bold text-secondary text-center cursor-pointer" :class="{'is-active': filterPerDayWeekMonth == 'day'}">Jour</span>
                    <span @click="filterPerDayWeekMonth = 'week'" class="block py-3 px-2 text-md text-md font-bold text-secondary text-center cursor-pointer" :class="{'is-active': filterPerDayWeekMonth == 'week'}">Semaine</span>
                    <span @click="filterPerDayWeekMonth = 'month'" class="block py-3 px-2 rounded-r-lg text-md font-bold text-secondary text-center cursor-pointer" :class="{'is-active': filterPerDayWeekMonth == 'month'}">Mois</span>
                </div>
            </div>
            <div class="mx-5">
                <table class="table-auto border-collapse border-spacing-0 text-secondary w-full lg:text-lg text-md text-secondary text-center">
                    <thead class="font-bold">
                        <tr>
                            <th class="text-start pl-5"><span class="block mb-5">DOCTEURS</span></th>
                            <th><span class="block mb-5">FICHIERS</span></th>
                            <th><span class="block mb-5">TEMPS</span></th>
                            <th><span class="block mb-5">ACTION</span></th>
                            <th><span class="block mb-5"></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="consultation in getPaginatedItems()" :key="consultation.id">
                            <td class="p-0">
                                <div class="flex flex-row justify-between font-bold px-5 py-2 mb-5">
                                    <span class="block rounded-full lg:w-16 lg:h-16 w-12 h-12 doctor-profile my-auto"></span>
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto font-bold">Dr. {{ consultation.medecin_id.fullname }}</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">{{ consultation.motif }}</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto text-danger font-extrabold">{{ formatDateTimeInEnglish(consultation.date) }}</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5" id="actionField">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="min-w-40 rounded-3xl my-auto py-2" href="#">Voir</a>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <button type="button my-auto mr-0">
                                        <span class="text-xl font-bold">.&nbsp;.&nbsp;.</span>
                                    </button>      
                                </div>                        
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <dashboard-pagination-bloc v-if="totalPages > 1" :currentPage="pagination.currentPage" :totalPages="totalPages" @page-changed="goToPage"/>
        </section>
    </main>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    .text-secondary {
        color: #343434;
    }

    .text-danger {
        color: #F80D38;
    }

    #filtering-section > #watch > select, #filtering-section > #month > select, #filtering-section > #search > input, 
    #filtering-section > #OtherOption, tbody > tr > td > div > a, #paginationBloc > nav {
        border: 2px solid #EDEDED;
    }    

    #filtering-section > #OtherOption> span:nth-child(2) {
        border-left: 2px solid #EDEDED;
        border-right: 2px solid #EDEDED;
    }

    #filtering-section > #search > input::placeholder {
        color: #343434;
    }

    #OtherOption .is-active {
        background-color: #4FD1C5;
        color: white;
    }

    tbody > tr > td > div > .doctor-profile {
        background-color: #D6D6D6;
        border: 5px solid #E1E1E1;
    }

    tbody > tr > td > div > .doctor-profile {
        background-color: #D6D6D6;
        border: 5px solid #E1E1E1;
    }

    tbody > tr > td > #actionField > a:hover, #paginationBloc > nav > ul .is-active {
        background-color: #1814F3;
        color: white;
        font-weight: bold;
    }

    tbody > tr > td > div {
        border-top: 2px solid #EDEDED;
        border-bottom: 2px solid #EDEDED;
    }

    tbody > tr > td:first-child > div {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-left: 2px solid #EDEDED;
    }
    
    tbody > tr > td:last-child > div {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-right: 2px solid #EDEDED;
    }

    #imc_calculator {
        background: linear-gradient(135deg, #003DFA 0%, #003DFA 50%, #FFFFFF 100%);
    }

    #hint > span:nth-child(3) {
        background: linear-gradient(135deg, #B5D4F1 0%, #81E5DB 25%, #E8D284 50%, #E2798E 100%);
    }
</style>