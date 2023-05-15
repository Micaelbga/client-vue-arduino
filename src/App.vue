<template>
  <v-app>
    <v-app-bar>
        <v-btn @click="this.$router.push('/')">Home</v-btn>
        <v-btn @click="this.$router.push('/movimentacao')">Movimentações</v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
</script>
