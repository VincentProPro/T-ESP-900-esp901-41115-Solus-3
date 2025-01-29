<template>
  <!-- component -->
  <div class="h-screen md:flex">
    <div
      class="bg-frame-no-auth bg-no-repeat bg-cover relative overflow-hidden md:flex w-1/2 justify-around items-center hidden"
    >
      <!-- <div>
        <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
        <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
        <button
          type="submit"
          class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
        >
          Read More
        </button>
      </div> -->
    </div>
    <!-- <div> -->
    <!-- <NavPreauth />
      <AllUserFooter />
      <HeaderWithoutAuth />
      <HeaderWithAuth />
      <NavBarComponent /> -->

    <div class="flex md:w-4/5 justify-center py-10 items-center bg-white">
      <div><HeaderWithoutAuth /> <slot /></div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
// import NavPreauth from '../nav/NavPreauth.vue'

// import AllUserFooter from '../../components/footer/FooterForAll.vue'
import HeaderWithoutAuth from '../header/HeaderWithoutAuth.vue'
// import HeaderWithAuth from '../header/HeaderWithAuth.vue'
// import NavBarComponent from '../nav/NavBar.vue'

export default {
  props: {},
  components: {
    // NavPreauth,
    // AllUserFooter,
    HeaderWithoutAuth
    // HeaderWithAuth,
    // NavBarComponent
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
