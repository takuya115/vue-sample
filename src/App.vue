<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SVGRect :posX="X" :posY="Y" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SVGRect from './components/SVGRect.vue'

export default {
  name: 'App',
  components: {
    SVGRect,
  },
  data() {
    return {
      X: 0,
      Y: 0,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
