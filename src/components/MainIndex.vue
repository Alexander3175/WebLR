<template>
    <navigation-Menu />
    <navigation-LR />
    <router-view></router-view>
  </template>
  
  <script>
  import navigationMenu from "./navigationMenu.vue";
  import navigationLR from "./navigationLR.vue";
  export default {
    name: "MainIndex",
    components: {
      navigationMenu,
      navigationLR,
    },
  };
  </script>
  
  <style scoped>

  </style>
  