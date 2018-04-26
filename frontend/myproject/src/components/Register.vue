<template>
  <div>

<h1>register</h1>

<input type="email" name="email" v-model="email" placeholder="email" />
<br>

<input type="password" name="password" v-model="password" placeholder="password" />

<br>
<div class="error" v-html="error" />
<p>
<div class="investText" v-html="investText" />
<br>

<button @click="register" >Register me</button>
<br>
<button @click="invest">Invest here</button>

  </div>
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
