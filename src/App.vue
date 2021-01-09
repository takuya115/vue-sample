<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="switchAnimation">{{btnMsg}}</button>
    <SVGRect :onAnimation="onAnimation" />
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
      start: null,
      animationId: null,
      onAnimation: false,
    }
  },
  methods: {
    switchAnimation() {
      this.onAnimation = !this.onAnimation;
    },
  },
  computed: {
    btnMsg() {
      return this.onAnimation ? '停止' : '開始'
    },
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
