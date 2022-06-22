<template>
  <div id="app">
    <HomeVue/>
    <AboutVue/>
    <NotFoundPageVue/>
  </div>
</template>

<script>

import HomeVue from './components/Home.vue';
import AboutVue from './components/About.vue';
import NotFoundPageVue from './components/NotFoundPage.vue';

export default {
  components:{
    HomeVue,
    AboutVue,
    NotFoundPageVue,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>