<template>
    <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4">
        Bottomless
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>
            myButton
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat dark>
            <router-link to="register">
                Sign up
                </router-link>
        </v-btn>
    </v-toolbar-items>
    </v-toolbar>
 </template>
<script>
export default {
}
 
</script>

<style scoped>

</style>
