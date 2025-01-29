<script>
import FormPatient from '../components/FormSigninPatient.vue'

export default {
  components: {
    FormPatient,
  },
  computed: {
      isAuthenticated() {
          return this.$store.state.AuthenticationModule.status.isAuthenticated;
      },
      isPatient() {
          return this.$store.state.AuthenticationModule.user ? this.$store.state.AuthenticationModule.user.role == 'patient' : false;
      },

      isDoctor() {
          return this.$store.state.AuthenticationModule.user ? this.$store.state.AuthenticationModule.user.role == 'medecin' : false;
      },
  },
}
</script>

<template>
  <main>
    <FormPatient />
  </main>
</template>
