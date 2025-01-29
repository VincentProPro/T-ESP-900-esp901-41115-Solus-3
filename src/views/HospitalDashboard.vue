<script>
// import DashboardPaginationBloc from '@/components/DashboardPaginationBloc.vue'
import ChartTotalPatients from '@/components/ChartTotalPatients.vue'
import ChartMeetings from '@/components/ChartMeetings.vue'
import ChartDiseasesFrequency from '@/components/ChartDiseasesFrequency.vue'
import ChartPatientSurveys from '@/components/ChartPatientSurveys.vue'
import ApiService from '@/services/api.services.js'


export default {
    components: {
        // DashboardPaginationBloc,
        ChartTotalPatients,
        ChartMeetings,
        ChartDiseasesFrequency,
        ChartPatientSurveys,
    },
    async mounted() {
        if (!this.isAuthenticated) {
            this.$router.push('/signinPatient')
        } else {
            if(this.isPatient) {
                this.$router.push('/patients-dashboard')
            } else if(this.isDoctor) {
                this.$router.push('/doctors-dashboard')
            }

            await this.getPatients();
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
    },
    methods: {
        async getPatients() {
            ApiService.setHeader();
            const response = await ApiService.get(`/patient/`);
            this.patients = response.data;
        },
    },
    data() {
        return {
            patients: [],
        }
    },
}
</script>

<template>
    <!-- Pour integrer avec le layout, il a fallu w-[85%] ml-[15%] mt-24 -->
    <main class="min-h-screen z-40 overflow-hidden w-[85%] ml-[15%] mt-24 p-5" style="background-color: #F5F7FA; font-family: 'Poppins', sans-serif; font-weight: 300; font-style: normal;">
        <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-12 w-full">
            <div class="h-auto p-4 shadow-lg bg-white rounded-lg col-span-1">
                <div class="legend mb-3">
                    <h1 class="lg:text-xl text-lg text-secondary">Total des patients</h1>
                    <span class="font-bold text-black text-lg">{{ patients.length }}</span>
                </div>
                <ChartTotalPatients />
            </div>
            <div class="h-auto p-4 shadow-lg bg-white rounded-lg col-span-1">
                <div class="legend mb-3">
                    <h1 class="lg:text-xl text-lg text-secondary">Total des rendez-vous</h1>
                    <span class="font-bold text-black text-lg">365</span>
                </div>
                <ChartMeetings />
            </div>
            <div class="h-auto p-4 shadow-lg bg-white rounded-lg lg:col-span-1 md:col-span-2 col-span-1">
                <div class="legend mb-3">
                    <h1 class="lg:text-xl text-lg text-secondary">Fréquence des maladies</h1>
                    <span class="font-bold text-black text-lg">4</span>
                </div>
                <ChartDiseasesFrequency />
            </div>
        </section>
        <section class="grid grid-cols-1 gap-4 mb-12 w-full">
            <div class="p-4 shadow-lg bg-white rounded-lg">
                <div class="legend mb-3">
                    <h1 class="lg:text-xl text-lg text-secondary">Sondage des patients</h1>
                </div>
                <ChartPatientSurveys class="max-h-[350px]"/>
            </div>
        </section>
        <section class="grid grid-cols-2 gap-4 mb-12 w-full">
            <div class="p-4 shadow-lg bg-white rounded-lg lg:col-span-1 col-span-2">
                <h1 class="lg:text-xl text-lg text-secondary mb-5">Nouvelle demande de rendez-vous</h1>
                <div class="border p-5 mb-3 border-dashed rounded-lg" style="border-color: #1814F3;">
                    <div class="flex justify-between mb-12">
                        <div class="">
                            <img src="../assets/img/max.png" alt="" class="h-[40px] w-[40px] rounded-full inline-block mr-2">
                            <span class="inline-block text-lg">Max</span>
                        </div>
                        <a href="" class="inline p-0 m-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" height="20" width="20" class="m-0 p-0"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg></a>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-lg">Traitement des yeux secs</span>
                        <span class="text-lg">25 Mars, 14 : 30 </span>
                    </div>
                </div>
                <div class="flex justify-end">
                    <span class="mr-5 my-auto">+15 demandes supplémentaires</span>
                    <a class="rounded-3xl my-auto py-1 px-12" href="#" style="background-color:#EBFFF5; border: 1px solid #1814F3; color: #1814F3">Voir</a>
                </div>
            </div>

            <div class="p-4 shadow-lg bg-white rounded-lg lg:col-span-1 col-span-2">
                <h1 class="lg:text-2xl text-xl text-secondary mb-5">Médécin</h1>
                <div class="-mt-12 mb-8">
                    <img src="../assets/img/doctor.png" alt="" class="h-[80px] w-[80px] rounded-full block mx-auto mb-2">
                    <h5 class="block text-lg text-center">Dr. Anushka Singh</h5>
                    <span class="block text-center mb-3" style="color:#777777"> Docteur en médecine ostéopathique</span>
                    <div class="flex">
                        <a class="rounded-3xl py-2 px-12 mx-auto" href="#" style="border: 2px solid #1814F3; color: #1814F3;">Disponible</a>
                    </div>
                </div>
                <div class="grid grid-cols-3">
                    <div>
                        <span class="block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" class="mx-auto mb-3" fill="#1814F3"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        </span>
                        <p class="text-center">
                            <span style="color:#777777;">Contact : </span>
                            <span>1********0</span>
                        </p>
                    </div>
                    <img src="../assets/img/Line.png" alt="" class="mx-auto">
                    <div class="text-center">
                        <span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" class="mx-auto mb-3" fill="#1814F3"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span>
                        <p>
                            <span style="color:#777777;">Email : </span><i class="fa fa-user"></i>
                            <span>drabc@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full shadow-lg rounded-lg bg-white py-5">
            <h1 class="text-2xl font-bold mb-5 px-5 text-secondary">Liste des rendez-vous pris</h1>
            <div class="mb-8 py-2 px-5" id="filtering-section" style="background-color:#F6F6F6;">
                <div class="w-[500px] grow" id="search">
                    <input class="px-1 py-3 indent-2  w-full rounded-lg bg-white text-secondary outline-0" type="search" name="" value="" placeholder="Recherche un rdv">
                </div>
            </div>
            <div class="px-5">
                <table class="table-auto border-collapse border-spacing-0 w-full lg:text-lg text-md text-center">
                    <thead class="font-bold">
                        <tr>
                            <th class="text-start pl-5"><span class="block mb-5">Nb</span></th>
                            <th><span class="block mb-5">Nom</span></th>
                            <th><span class="block mb-5">Numéro</span></th>
                            <th><span class="block mb-5">Email</span></th>
                            <th><span class="block mb-5">Date</span></th>
                            <th><span class="block mb-5">Heure</span></th>
                            <th><span class="block mb-5">Statut</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row font-bold px-5 py-2 my-3">
                                    <span class="flex rounded-full h-16 w-0 my-auto"></span>
                                    <span class="block my-auto font-bold">1.</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center font-bold px-5 py-2 my-3">
                                    <span class="flex rounded-full h-16 w-0 my-auto"></span>
                                    <div class="inline-block my-auto">
                                        <img src="../assets/img/max.png" alt="" class="h-[40px] w-[40px] rounded-full inline-block mr-2">
                                        <span class="inline-block text-lg">Max</span>
                                    </div>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">1********0</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">abc@gmail.com</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">25 March,2023</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">10:00 AM</span>   
                                </div>
                            </td>
                            
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="my-auto" href="#" style="border:none; color: #1814F3;">A venir</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row font-bold px-5 py-2 my-3">
                                    <span class="flex rounded-full h-16 w-0 my-auto"></span>
                                    <span class="block my-auto font-bold">2.</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center font-bold px-5 py-2 my-3">
                                    <span class="flex rounded-full h-16 w-0 my-auto"></span>
                                    <div class="inline-block my-auto">
                                        <img src="../assets/img/max.png" alt="" class="h-[40px] w-[40px] rounded-full inline-block mr-2">
                                        <span class="inline-block text-lg">Max</span>
                                    </div>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">1********0</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">abc@gmail.com</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">25 March,2023</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">10:00 AM</span>   
                                </div>
                            </td>
                            
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="my-auto" href="#" style="border:none; color: #1814F3;">A venir</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row font-bold px-5 py-2 my-3">
                                    <span class="flex rounded-full h-16 w-0 my-auto"></span>
                                    <span class="block my-auto font-bold">3.</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center font-bold px-5 py-2 my-3">
                                    <span class="flex rounded-full h-16 w-0 my-auto"></span>
                                    <div class="inline-block my-auto">
                                        <img src="../assets/img/max.png" alt="" class="h-[40px] w-[40px] rounded-full inline-block mr-2">
                                        <span class="inline-block text-lg">Max</span>
                                    </div>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">1********0</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">abc@gmail.com</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">25 March,2023</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">10:00 AM</span>   
                                </div>
                            </td>
                            
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 my-3">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="my-auto" href="#" style="border:none; color: #1814F3;">A venir</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    .text-secondary {
        color: #A0AEC0;
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

    tbody > tr > td > div {
        border-left: 2px solid #EDEDED;
    }

    tbody > tr > td {
        border-bottom: 2px solid #EDEDED;
    }

    tbody > tr > td:first-child > div {
        border-left: none;
    }
    
    tbody > tr > td:last-child > div {
        border-right: none;
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