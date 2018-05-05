<template>
    <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
        <v-btn flat dark @click="navigateTo({name: 'homepage'})">
        Bottomless
        </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn
        flat dark>
            myButton
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    <v-btn v-if="!$store.state.isUserLoggedIn"
    flat dark @click="navigateTo({name: 'register'})">
        Sign up
    </v-btn>
    <v-btn v-if="!$store.state.isUserLoggedIn"
    flat dark @click="navigateTo({name: 'login'})">
        Sign in
    </v-btn>
    <v-btn v-if="$store.state.isUserLoggedIn"
    flat dark @click="logout">
        Sign out
    </v-btn>
    </v-toolbar-items>
    </v-toolbar>
 </template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      //TODO: redirect to homepage
      this.$router.push({
          name: 'homepage'
      })
    }
  }
}
</script>

<style scoped>

</style>
