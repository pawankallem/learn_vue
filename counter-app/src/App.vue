<template>
  <div>
    <h1> Counter Application </h1>
    <CounterApp/>
  </div>
</template>

<script>
import CounterApp from './components/CounterApp.vue'
export default {
  name: 'App',
  components: {
    CounterApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
