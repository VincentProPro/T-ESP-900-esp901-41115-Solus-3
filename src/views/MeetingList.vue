<template>
    <main class="min-h-screen overflow-hidden w-[85%] ml-[15%] mt-24 p-5 bg-[#F5F7FA] relative" style="font-family: 'Poppins', sans-serif; font-weight: 300; font-style: normal;">
        <section class="w-full relative rounded-[20px] bg-white pb-[100px]">
            <div class="w-full p-[20px] flex justify-between items-center">
                <div>
                    <button class="text-blue-700 border-b-2 border-blue-700 p-[10px]">Liste des rdv</button>
                    <button @click="goToAjoutPage()" class="text-blue-400 mx-[20px] p-[10px]">Ajouter un rdv</button>
                </div>
                <div class="flex justify-center text-gray-700 items-center">
                    <span>Afficher</span>
                    <select name="" id="" class="w-[170px] mx-[10px] rounded-[10px] overflow-hidden border border-gray-400 focus:border-blue-400 p-[5px]">
                        <option value="" class="p-[5px]">Aujourd'hui</option>
                    </select>
                    <span>Liste des rendez-vous</span>
                </div>
            </div>
            <div class="bg-[#F5F7FA] w-full relative p-[20px]">
                <input type="text" id="search" v-model="searchQuery" @input="searchPatient" class="rounded-[10px] p-[8px] w-[400px] border-gray-300 outline-none placeholder:text-gray-300 text-gray-600" placeholder="Rechercher un patient">
            </div>
            <ul class="w-full relative">
                <li class="px-[10px] py-[20px] flex w-full items-center relative">
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[5%]">Nb</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[15%]">Nom</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Numéro</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[30%]">Motif</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Médecins</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Date</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Heure</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Statut</div>
                </li>
                <li v-for="(patient, index) in filteredPatient" :key="index" :id="(index + 1)" class="px-[10px] py-[20px] flex w-full items-center relative">
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[5%]">{{ index + 1 }}.</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[15%]">{{ patient.nom }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">{{ patient.numero }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[30%]">{{ patient.motif }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Dr. {{ patient.docteur }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">{{ patient.date }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">{{ patient.heure }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%] flex flex-wrap">
                        <span v-if="!patient.statut && !patient.annule" class="text-green-600 capitalize">upcoming</span>
                        <span v-else-if="patient.statut && !patient.annule" class="text-blue-600 capitalize">completed</span>
                        <span v-else-if="patient.annule" class="text-red-600 capitalize">Cancelled</span>
                    </div>
                </li>
            </ul>
            <!--
                PAGINATION
                <div class="w-full relative flex justify-center text-gray-700 items-center mt-[25px]">
                    <button class="w-[30px] h-[30px] flex justify-center items-center text-center rounded-[50%] mx-[5px] border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"/></svg>
                    </button>
                    <div class="w-[80px] h-[30px] flex justify-center items-center text-center rounded-[30px] mx-[5px] border">
                        <span class="font-bold">1 </span>
                        <span class="mx-[2px]">/</span>
                        <span> 10</span>
                    </div>
                    <button class="w-[30px] h-[30px] flex justify-center items-center text-center rounded-[50%] mx-[5px] border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"/></svg>
                    </button>
                </div>
            -->
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from 'vue-router';

const router = useRouter()

function goToAjoutPage() {
    router.push('/create-meeting')
}

const patients = ref([
    {
        nom: "Joseph AKATE",
        numero: "12345678",
        motif: "Palu chronique",
        docteur: "Marcus",
        date: "23 avril 2024",
        heure: "12h30",
        statut: true,
        annule: false
    },
    {
        nom: "Jean GUOUE",
        numero: "12345678",
        motif: "Fièvre",
        docteur: "Pierre",
        date: "23 avril 2024",
        heure: "17h30",
        statut: false,
        annule: false
    },
    {
        nom: "Paule EKPIN",
        numero: "12345678",
        motif: "Covid 19",
        docteur: "Marcus",
        date: "27 avril 2024",
        heure: "12h30",
        statut: false,
        annule: true
    },
    {
        nom: "Jean GUOUE",
        numero: "12345678",
        motif: "Fièvre",
        docteur: "Pierre",
        date: "23 avril 2024",
        heure: "17h30",
        statut: false,
        annule: false
    },
])

const searchQuery = ref('');
const filteredPatient = ref([]);

const searchPatient = () => {
    filteredPatient.value = patients.value.filter(patient =>
        (patient.nom.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        patient.docteur.toLowerCase().includes(searchQuery.value.toLowerCase()))
    );
}

onMounted(() => {
    filteredPatient.value = patients.value; // Charger toutes les formations au démarrage
});

</script>

<style scoped>
ul li:nth-child(odd) {
    background-color: white;
}
ul li:nth-child(even) {
    background-color: #F5F7FA;
}
</style>
