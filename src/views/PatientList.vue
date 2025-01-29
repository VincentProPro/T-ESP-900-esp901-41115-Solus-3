<template>
    <main class="min-h-screen overflow-hidden w-[85%] ml-[15%] mt-24 p-5 bg-[#F5F7FA] relative" style="font-family: 'Poppins', sans-serif; font-weight: 300; font-style: normal;">
        <section class="w-full relative rounded-[20px] bg-white pb-[100px]">
            <div class="w-full p-[20px] flex justify-between items-center">
                <div>
                    <button class="text-blue-700 border-b-2 border-blue-700 p-[10px]">Liste des patients</button>
                    <button @click="goToAjoutPage()" class="text-blue-400 mx-[20px] p-[10px]">Ajouter un patient</button>
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
                <li class="px-[10px] py-[20px] flex bg-white w-full items-center relative">
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[5%]">Sr no.</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[20%]">Nom</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Numéro</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Genre</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Age</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[20%]">Traitement</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[15%]">Groupe sanguin</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Action</div>
                </li>
                <li v-for="(patient, index) in filteredPatient" :key="index" :id="(index + 1)" class="px-[10px] bg-[#F5F7FA] py-[20px] flex w-full items-center relative">
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[5%]">{{ index + 1 }}.</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 flex items-center justify-start p-[5px] w-[20%]">
                        <div class="w-[30px] h-[30px] border-gray-400 border rounded-[50%] overflow-hidden flex justify-center items-center">
                            <img :src="patient.image" :alt="patient.nom">
                        </div>
                        <h1 class="ml-[5px]">{{ patient.nom }}</h1>
                    </div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">{{ patient.numero }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">{{ patient.genre }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%]">Dr. {{ patient.age }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[20%]">{{ patient.traitement }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[15%]">{{ patient.groupe }}</div>
                    <div class="text-gray-700 font-semibold border-l border-r border-gray-100 p-[5px] w-[10%] flex flex-wrap">
                        <div class="m-[5px] w-[25px] h-[25px] rounded-[50%] border border-red-500 flex justify-center items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10 2.25a.75.75 0 0 0-.75.75v.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5h-4.25V3a.75.75 0 0 0-.75-.75zm0 8.4a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75m4.75.75a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0z"/><path fill="currentColor" fill-rule="evenodd" d="M5.991 7.917a.75.75 0 0 1 .746-.667h10.526a.75.75 0 0 1 .746.667l.2 1.802c.363 3.265.363 6.56 0 9.826l-.02.177a2.853 2.853 0 0 1-2.44 2.51a27.04 27.04 0 0 1-7.498 0a2.853 2.853 0 0 1-2.44-2.51l-.02-.177a44.489 44.489 0 0 1 0-9.826zm1.417.833l-.126 1.134a42.99 42.99 0 0 0 0 9.495l.02.177a1.353 1.353 0 0 0 1.157 1.191c2.35.329 4.733.329 7.082 0a1.353 1.353 0 0 0 1.157-1.19l.02-.178c.35-3.155.35-6.34 0-9.495l-.126-1.134z" clip-rule="evenodd"/></svg></div>
                        <div class="m-[5px] w-[25px] h-[25px] rounded-[50%] border border-blue-500 flex justify-center items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/></svg></div>
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
    router.push('/create-patient')
}

const patients = ref([
    {
        image: "",
        nom: "Joseph AKATE",
        numero: "12345678",
        genre: "Masculin",
        age: 23,
        traitement: "Palu et fièvre",
        groupe: "B+"
    },
    {
        image: "",
        nom: "Joseph AKATE",
        numero: "12345678",
        genre: "Masculin",
        age: 23,
        traitement: "Palu et fièvre",
        groupe: "B+"
    },
    {
        image: "",
        nom: "Joseph AKATE",
        numero: "12345678",
        genre: "Masculin",
        age: 23,
        traitement: "Palu et fièvre",
        groupe: "B+"
    },
    {
        image: "",
        nom: "Joseph AKATE",
        numero: "12345678",
        genre: "Masculin",
        age: 23,
        traitement: "Palu et fièvre",
        groupe: "B+"
    },
])

const searchQuery = ref('');
const filteredPatient = ref([]);

const searchPatient = () => {
    filteredPatient.value = patients.value.filter(patient =>
        (patient.nom.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        patient.traitement.toLowerCase().includes(searchQuery.value.toLowerCase()))
    );
}

onMounted(() => {
    filteredPatient.value = patients.value; // Charger toutes les formations au démarrage
});

</script>

<style scoped>
</style>