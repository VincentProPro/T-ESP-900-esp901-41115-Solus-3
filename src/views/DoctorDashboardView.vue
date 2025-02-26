<script>
import DashboardPaginationBloc from '@/components/DashboardPaginationBloc.vue'
import DashboardCalendar from '@/components/DashboardCalendar.vue'
import ApiService from '@/services/api.services.js'
export default {
    components: {
        DashboardPaginationBloc,
        DashboardCalendar,
    },
    async mounted() {
        if (!this.isAuthenticated) {
            this.$router.push('/signinPatient')
        } else {
            if(this.isPatient) {
                this.$router.push('/patients-dashboard')
            } else if(!this.isDoctor) {
                this.$router.push('/hospitals-dashboard')
            }

            await this.getPatients();
            await this.getMedicalInformations();
            await this.getDoctorConsultations();
        }
    },
       computed: {
        isAuthenticated() {
            return this.$store.state.AuthenticationModule.status.isAuthenticated;
        },

        getDoctor() {
            return this.$store.state.AuthenticationModule.user ? this.$store.state.AuthenticationModule : null;
        },
    
        isPatient() {
            return this.$store.state.AuthenticationModule.user ? this.$store.state.AuthenticationModule.user.role == 'patient' : null;
        },

        isDoctor() {
            return this.$store.state.AuthenticationModule.user ? this.$store.state.AuthenticationModule.user.role == 'medecin' : null;
        },
        totalPages() {
            return Math.ceil(this.consultations.length / 10)
        },
    },
    methods: {
        async getDoctorConsultations() {
            ApiService.setHeader();
            const response = await ApiService.get(`/consultation/medecin/10/`);
            // const response = await ApiService.get(`/consultation/medecin/${this.$store.state.AuthenticationModule.user.id}/`);
            this.consultations = response.data;
        },

        getPaginatedItems() {
            const start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
            const end = start + this.pagination.itemsPerPage;
            return this.consultations.slice(start, end);
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
        async getPatients() {
             ApiService.setHeader();
            const response = await ApiService.get(`/patient/`);
            this.patients = response.data;
        },
        async getMedicalInformations() {
             ApiService.setHeader();
            const response = await ApiService.get(`/dossier/`);
            this.medicalInformations = response.data;
        }
    },
    data() {
        return {
            consultations: [],
            patients: [],
            medicalInformations: [],
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
        <section class="flex flex-row flex-lg-nowrap flex-wrap justify-between mb-12 w-full gap-8">
            <div id="statistic" class="grow">
                <h1 class="md:text-3xl text-2xl font-medium mb-8"><span style="color:#D6D6D6;">Bonjour</span> <span class="text-primary">Dr. {{ getDoctor ? getDoctor.lastname : null }}</span> </h1>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div class="min-w-[400px] px-4 py-6 flex flex-row justify-between bg-white shadow-lg rounded-lg">
                        <div>
                            <h5 class="text-lg font-bold mb-4 statistic-title">Nombre de patients</h5>
                            <div>
                                <span class="inline-block md:text-2xl text-xl statistic-number font-medium mr-8">{{ patients.length }}</span>
                                <span class="inline-block md:text-xl text-xl statistic-percentage font-medium">+5%</span>
                            </div>
                        </div>
                        <div class="h-[60px] w-[45px] flex rounded-xl stastic-icon my-auto">
                            <img class="m-auto" src="../assets/img/patient_icon.png" alt="">
                        </div>
                    </div>
                    <div class="min-w-[400px] px-4 py-6 flex flex-row justify-between bg-white shadow-lg rounded-lg">
                        <div>
                            <h5 class="text-lg font-bold mb-4 statistic-title">Nombre de dossiers médicaux</h5>
                            <div>
                                <span class="inline-block md:text-2xl text-xl statistic-number font-medium mr-8">{{ medicalInformations.length }}</span>
                                <span class="inline-block md:text-xl text-xl statistic-percentage font-medium">+5%</span>
                            </div>
                        </div>
                        <div class="h-[60px] w-[45px] flex rounded-xl stastic-icon my-auto">
                            <img class="m-auto" src="../assets/img/folder_icon.png" alt="">
                        </div>
                    </div>
                    <div class="col-span-2 min-w-[400px] px-4 py-6 flex flex-row justify-between bg-white shadow-lg rounded-lg">
                        <div>
                            <h5 class="text-lg font-bold mb-4 statistic-title">Nombre de consultations</h5>
                            <div>
                                <span class="inline-block md:text-2xl text-xl statistic-number font-medium mr-8">{{ consultations.length }}</span>
                                <span class="inline-block md:text-xl text-xl statistic-percentage font-medium">+5%</span>
                            </div>
                        </div>
                        <div class="h-[60px] w-[45px] flex rounded-xl stastic-icon my-auto">
                            <img class="m-auto" src="../assets/img/doctor-consultation_icon.png" alt="">
                        </div>
                    </div>
                    <!-- <div class="min-w-[400px] px-4 py-6 flex flex-row justify-between bg-white shadow-lg rounded-lg">
                        <div>
                            <h5 class="text-lg font-bold mb-4 statistic-title">????????</h5>
                            <div>
                                <span class="inline-block md:text-2xl text-xl statistic-number font-medium mr-8">2,300</span>
                                <span class="inline-block md:text-xl text-xl statistic-percentage font-medium">+5%</span>
                            </div>
                        </div>
                        <div class="h-[60px] w-[45px] flex rounded-xl stastic-icon my-auto">
                            <img class="m-auto" src="../assets/img/world_icon.png" alt="">
                        </div>
                    </div> -->
                </div>
            </div>
            <div id="calendar" class="min-w-[450px] mx-auto">
                <dashboard-calendar expanded  class="h-full" />
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
                    <input class="px-1 py-3 indent-2  w-full rounded-lg bg-white text-secondary outline-0" type="search" name="" value="" placeholder="Recherche de patients par nom ou par titre">
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
                            <th class="text-start pl-5"><span class="block mb-5">PATIENTS</span></th>
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
    #filtering-section > #OtherOption, tbody > tr > td > div > a {
        border: 2px solid #EDEDED;
    }    

    #filtering-section > #OtherOption> span:nth-child(2) {
        border-left: 2px solid #EDEDED;
        border-right: 2px solid #EDEDED;
    }

    #filtering-section > #search > input::placeholder {
        color: #343434;
    }

    #OtherOption .is-active, .stastic-icon {
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

    tbody > tr > td > #actionField > a:hover {
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

    .text-primary {
        color: #1814F3;
    }

    .statistic-number {
        color: #2D3748;
    }

    .statistic-percentage {
        color: #48BB78;
    }


    .statistic-title {
        color: #A0AEC0;
    }
</style>