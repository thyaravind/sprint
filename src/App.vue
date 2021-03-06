<template>
  <v-app>
    <side-nav />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import SideNav from './components/SideNav.vue';
export default {
  name: "App",

  components: {SideNav},

  data: () => ({
 
  }),

};
</script>

<style scoped>

</style>