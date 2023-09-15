<template>

  <router-view></router-view>
</template>

<script>
import Main from "./components/MainIndex.vue";

export default {
  name: "App",
  components: {
    Main
  },
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
</style>
