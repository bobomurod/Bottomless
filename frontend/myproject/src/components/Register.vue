/* eslint-disable */

<template>
  <v-layout d-flex>
    <v-flex xs6 offset-xs1>
        <v-toolbar dense flat class="cyan" dark>
        <v-toolbar-title>Registration</v-toolbar-title>
        </v-toolbar>
        <form name="Bottomless" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
            </form>
            <br>
            <div class="danger-alert" v-html="error" />
            <div class="danger-alert" v-html="status" />
            <div class="danger-alert" v-html="investText" />
            <br>
            <v-btn dark class="cyan" @click="register">Register me</v-btn>
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
      investText: null,
      status: null

    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.status = response.data.token
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // this.st = 'good'
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
