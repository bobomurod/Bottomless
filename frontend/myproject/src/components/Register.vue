<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-3">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
            <div class="pl-6 pr-6 pt-2 pb-2">
            <input type="email" name="email" v-model="email" placeholder="email" />
            <br>
            <input type="password" name="password" v-model="password" placeholder="password" />
            <br>
            <div class="error" v-html="error" />
            <br>
            <div class="investText" v-html="investText" />
            <br>
            <button @click="register">Register me</button>
            <br>
            <button @click="invest">Invest here</button>
            </div>
      </div>
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
