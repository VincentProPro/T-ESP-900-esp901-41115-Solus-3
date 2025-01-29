<template>
    <div class="container flex justify-end">
      <div class="main flex flex-col m-5">
        <div class="header">
          <div class="text-3xl font-bold text-gray-600 mb-4">Rejoignez nous!</div>
          <div class="text-xl font-bold text-gray-500 mb-4">Pour commencer, indiquer-nous le type de compte que vous souhaiter ouvrir.</div>
        </div>
  
        <!-- Premier lien -->
        <a href="" target="_new">
          <div class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
            <div class="left flex items-center">
              <!-- Icône d'hôpital -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
              <div>
                <div class="header text-blue-600 font-semibold text-2xl">Hopitaux</div>
                <div class="desc text-gray-600">Veuillez enregistrer votre hopital</div>
              </div>
            </div>
            <div class="right m-auto mr-0">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </a>
  
        <!-- Deuxième lien -->
        <a href="" target="_new">
          <div class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
            <div class="left flex items-center">
              <!-- Icône de médecin -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <div>
                <div class="header text-blue-600 font-semibold text-2xl">Médecin</div>
                <div class="desc text-gray-600">Veuillez vous enregistrer en tant que médecin</div>
              </div>
            </div>
            <div class="right m-auto mr-0">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </template>
        <style>
      body {background:white !important;}
  </style>

  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        showPassword: false
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
        const passwordInput = document.getElementById('password');
        if (this.showPassword) {
          passwordInput.type = 'text';
        } else {
          passwordInput.type = 'password';
        }
      }
    }
  };
  </script>
  