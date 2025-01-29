<template>
  <!-- <header-with-auth /> -->
    
  <NavBarComponent class="fixed"/>

  <div class="flex flex-col w-full">
    <header-without-auth class="ml-[15%] z-50"/>
    <slot />
  </div>
  <!-- <AllUserFooter /> -->
</template>
<script>
// import AllUserFooter from '../../components/footer/FooterForAll.vue'
import HeaderWithoutAuth from '../header/HeaderWithAuth.vue'
// import HeaderWithAuth from '../header/HeaderWithAuth.vue'
import NavBarComponent from '../nav/NavBar.vue'

export default {
  props: {},
  components: {
    // AllUserFooter,
    HeaderWithoutAuth,
    NavBarComponent
    // NavBarComponent,
    // HeaderWithAuth
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
