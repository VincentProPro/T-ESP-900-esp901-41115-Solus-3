<template>
    <main class="min-h-screen overflow-hidden w-[85%] ml-[15%] mt-24 p-5 bg-[#F5F7FA] relative" style="font-family: 'Poppins', sans-serif; font-weight: 300; font-style: normal;">
        <section class="w-full relative rounded-[20px] bg-white pb-[100px]">
            <div class="w-full p-[20px] flex justify-between items-center">
                <div>
                    <button @click="goToListPage()" class="text-blue-400 mx-[20px] p-[10px]">Liste des patients</button>
                    <button class="text-blue-700 border-b-2 border-blue-700 p-[10px]">Ajouter un patient</button>
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
                            <label for="" class="text-gray-600 mb-[10px]">Numéro d'Identification Personnel</label>
                            <input type="text" placeholder="Numéro NIP" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Numéro de téléphone</label>
                            <input type="text" placeholder="12345678" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                    </div>
                    <div class="w-full flex justify-between items-center mb-[25px]">
                        <div class="w-[49%] relative flex justify-start items-center">
                            <div class="w-[200px] flex flex-col relative">
                                <label for="" class="text-gray-600 mb-[5px]">Date de naissance</label>
                                <input type="date" placeholder="exemple@test.com" class="w-[160px] placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                            </div>
                            <div class="w-[200px] flex flex-col relative">
                                <label for="" class="text-gray-600 mb-[10px]">Âge</label>
                                <input type="text" placeholder="21" class="w-[60px] placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                            </div>
                        </div>
                        <div class="w-[49%] relative">
                            <h1 class="text-gray-600 mb-[10px]">Genre</h1>
                            <div class="flex w-auto justify-start items-center">
                                <div>
                                    <input type="radio" value="masculin" name="genre" id="masculin">
                                    <label for="masculin" class="text-gray-600 ml-[5px]">Masculin</label>
                                </div>
                                <div class="mx-[20px]">
                                    <input type="radio" value="feminin" name="genre" id="feminin">
                                    <label for="feminin" class="text-gray-600 ml-[5px]">Féminin</label>
                                </div>
                                <div class="mx-[20px]">
                                    <input type="radio" value="autre" name="genre" id="autre">
                                    <label for="autre" class="text-gray-600 ml-[5px]">Autre</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-between items-center mb-[25px]">
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Poids</label>
                            <input type="text" placeholder="72 kg" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                        <div class="w-[49%] relative">
                            <label for="" class="text-gray-600 mb-[10px]">Taille</label>
                            <input type="text" placeholder="170 cm" class="w-full placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300">
                        </div>
                    </div>
                    <div class="w-full relative mb-[25px]">
                        <label for="" class="text-gray-600 mb-[10px]">Antécédents du patient</label>
                        <textarea type="text" placeholder="Les antécédents du patient" class="w-full h-[100px] resize-none placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300"></textarea>
                    </div>
                    <div class="w-full relative mb-[25px]">
                        <label for="" class="text-gray-600 mb-[10px]">Vaccinations</label>
                        <textarea type="text" placeholder="Les vaccinations du patient" class="w-full h-[100px] resize-none placeholder:text-sm text-sm px-[15px] text-gray-600 placeholder:text-gray-400 rounded-[10px] p-[8px] outline-none border border-gray-300"></textarea>
                    </div>
                    <div class="w-full relative mb-[25px]">
                        <label for="fileInput" class="text-gray-600 mb-[10px]">Rapports / Dossiers antérieurs</label>
                        <input ref="fileInput" type="file" id="fileInput" multiple placeholder="Les vaccinations du patient" @change="handleFileChange" class="hidden">
                        <div ref="customFile" class="custom-file" @dragover.prevent="handleDragOver" @dragleave="handleDragLeave" @drop.prevent="handleDrop">
                            <span ref="fileText" class="file-text">Glisser et déposer vos fichiers ici</span>
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
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const fileInput = ref(null);
const customFile = ref(null);
const fileText = ref(null);

function handleFileChange() {
    if (fileInput.value.files.length > 0) {
        fileText.value.textContent = fileInput.value.files.length > 1 ? `${fileInput.value.files.length} fichiers sélectionnés` : fileInput.value.files[0].name;
    } else {
        fileText.value.textContent = "Glisser et déposer vos fichiers ici ou cliquez pour sélectionner";
    }
}

function handleDragOver(e) {
    e.preventDefault();
    customFile.value.classList.add('dragover');
}

function handleDragLeave() {
    customFile.value.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    customFile.value.classList.remove('dragover');
    fileInput.value.files = e.dataTransfer.files;
    handleFileChange();
}

function goToListPage() {
    router.push('/patients');
}
</script>

<style scoped>
.custom-file {
    width: 100%;
    border: 2px dashed #ccc;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}

.file-text {
    color: #888;
}

.custom-file:hover {
    background-color: #f5f5f5;
}
</style>