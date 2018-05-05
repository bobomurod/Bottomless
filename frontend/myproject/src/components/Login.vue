/* eslint-disable */
<template>
  <v-layout d-flex>
    <v-flex xs6 offset-xs1>
        <v-toolbar dense flat class="amber" dark>
        <v-toolbar-title>You can log in</v-toolbar-title>
        </v-toolbar>
        <form name="Bottomless" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
            </form>
            <br>
            <div class="danger-alert" v-html="error" />
            <div class="danger-alert" v-html="investText" />
            <br>
            <v-btn dark class="amber" @click="login">Log me in</v-btn>
            <br>
            <button @click="invest">Invest here</button>
    </v-flex>
  </v-layout>
 </template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      investText: null

    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data.token)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log(response.data.user)
        console.log(response.data.user.password)
        this.error = response.status + '\n' + response.data.user.email
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async invest () {
      // alert('invest button pressed')
      this.investText = 'invest detected'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.investText {
  color: blue;
}

</style>
