<template>
    <main class="min-h-screen overflow-hidden w-[85%] ml-[15%] mt-24 p-5 bg-[#F5F7FA] relative" style="font-family: 'Poppins', sans-serif; font-weight: 300; font-style: normal;">
        <section class="w-full relative rounded-[20px] bg-white pb-[100px]">
            <div class="w-full p-[20px] flex justify-between items-center">
                <div>
                    <button @click="goToListPage()" class="text-blue-400 mx-[20px] p-[10px]">Liste des rdv</button>
                    <button class="text-blue-700 border-b-2 border-blue-700 p-[10px]">Ajouter un rdv</button>
                </div>
            </div>
            <div class="w-full p-[20px] my-[25px] flex items-start justify-center">
                <div class="w-[150px] flex justify-center items-center">
                    <div class="w-[150px] h-[150px] rounded-[50%] border"></div>
                </div>
                <div class="w-full relative px-[20px]">
                    <div class="w-full flex justify-between items-center mb-[25px]">
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Nom</label>
                            <input type="text" placeholder="DUPONT" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Prénom(s)</label>
                            <input type="text" placeholder="Jean Pierre" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                    </div>
                    <div class="w-full flex justify-between items-center mb-[25px]">
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Email</label>
                            <input type="text" placeholder="exemple@test.com" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Numéro de téléphone</label>
                            <input type="text" placeholder="12345678" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                    </div>
                    <div class="w-full flex justify-start items-center mb-[25px]">
                        <div class="w-[200px] flex flex-col relative">
                            <label for="" class="text-gray-600 mb-[5px]">Date de naissance</label>
                            <input type="date" placeholder="exemple@test.com" class="w-[160px] placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                        <div class="w-[200px] flex flex-col relative">
                            <label for="" class="text-gray-600 mb-[10px]">Âge</label>
                            <input type="text" placeholder="21" class="w-[60px] placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                    </div>
                    <div class="w-full flex justify-between items-center mb-[25px]">
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Traitement</label>
                            <select name="" id="" class="w-full text-sm px-[15px] text-gray-600 rounded-[10px] p-[8px] outline-none border border-gray-300">
                                <option value="">Listes des traitement</option>
                                <option value="">Palu chronique</option>
                                <option value="">Fièvre</option>
                            </select>
                        </div>
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Groupe sanguin</label>
                            <input type="text" placeholder="B+" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                    </div>
                    <div class="w-full flex justify-between items-center mb-[25px]">
                        <div class="w-[49%] relative flex items-center justify-between">
                            <div class="w-[65%] relative">
                                <h1 class="text-gray-600 mb-[10px]">Patient</h1>
                                <div class="flex w-auto justify-start items-center">
                                    <div>
                                        <input type="radio" value="nouveau" name="patient" id="nouveau">
                                        <label for="nouveau" class="text-gray-600 ml-[5px]">Nouveau</label>
                                    </div>
                                    <div class="mx-[20px]">
                                        <input type="radio" value="ancien" name="patient" id="ancien">
                                        <label for="ancien" class="text-gray-600 ml-[5px]">Ancien</label>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[35%] relative">
                                <label for="" class="text-gray-600 mb-[10px]">Docteur assigné</label>
                                <select name="" id="" class="w-full text-sm px-[15px] text-gray-600 rounded-[10px] p-[8px] outline-none border border-gray-300">
                                    <option value="">Dr Amour</option>
                                    <option value="">Dr Amour</option>
                                    <option value="">Dr Amour</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[5px]">Date du rdv</label>
                            <input type="date" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                    </div>
                    <div class="w-full relative">
                        <label for="" class="text-gray-600 mb-[5px]">Time</label>
                        <div class="flex">
                            <button v-for="slot in slots" :key="slot.time" :class="[slot.available ? 'bg-white' : 'bg-gray-300 cursor-not-allowed', 'border-gray-100 border text-gray-600 p-[10px] px-[20px] text-sm']" @click="reserveSlot(slot)">
                              {{ slot.time }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full relative py-[20px] px-[40px] flex justify-end items-center">
                <button class="rounded-[10px] py-[10px] px-[20px] w-[150px] text-center text-white hover:font-bold hover:bg-blue-600 bg-blue-500 duration-200">
                    Ajouter
                </button>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function goToListPage() {
    router.push('/meetings')
}

const slots = ref([
  { time: '10:45 PM', available: true },
  { time: '11:30 AM', available: true },
  { time: '12:45 PM', available: false },
  { time: '08:30 AM', available: true },
  { time: '05:00 PM', available: false }
]);

const reserveSlot = (slot) => {
  if (slot.available) {
    slot.available = false;
  }
};
</script>

<style scoped>
button {
  transition: border-color 0.3s ease;
}

button:hover {
  border-color: #ccc;
}

button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>