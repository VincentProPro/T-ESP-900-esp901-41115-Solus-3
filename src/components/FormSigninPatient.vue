<template>
  <div class="flex">
    <div class="w-full flex items-center justify-center">
      <div class="max-w-md w-full p-6">
        <h1 class="text-3xl font-semibold mb-6 text-black text-center">Identifier votre compte!</h1>
        <p class="text-1xl font-semibold mb-6 text-black">Vos coordonnées sont nécessaires</p>
        <div class="mt-4 text-sm text-gray-600 text-center"></div>
        <form action="#" method="POST" class="space-y-4">
          <!-- Your form elements go here -->
          <div>
            <label for="User_npi" class="block text-sm font-medium text-gray-700">Vote NPI*</label>
            <input
              type="text"
              id="User_npi"
              name="User_npi"
              class="mt-1 p-2 w-full border rounded-md focus:border-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base transition-colors duration-300"
              style="color: black"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"
              >Mot de passe*</label
            >
            <div class="relative">
              <input
                type="password"
                id="password"
                name="password"
                style="color: black"
                class="mt-1 p-2 w-full border rounded-md focus:border-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base transition-colors duration-300"
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-gray-700"
                @click="togglePasswordVisibility"
              >
                {{ showPassword ? 'Masquer' : 'Montrer' }}
              </button>
            </div>
          </div>
          <div class="mt-4 text-sm text-gray-600 text-center flex items-center">
            <input type="checkbox" id="terms" class="mr-2" />
            <label for="terms">J'accepte les termes et conditions</label>
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-primary-base text-white p-2 rounded-md hover:bg-primary-base focus:outline-none focus:bg-primary-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-base transition-colors duration-300"
            >
              Se Connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
      const passwordInput = document.getElementById('password')
      if (this.showPassword) {
        passwordInput.type = 'text'
      } else {
        passwordInput.type = 'password'
      }
    }
  }
}
</script>
