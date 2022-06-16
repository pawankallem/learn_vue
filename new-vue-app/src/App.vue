<template>
  <div>
   <app-header></app-header>
   <testComponentsVue></testComponentsVue>
   <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TestComponentsVue from "./components/TestComponents.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "testComponentsVue": TestComponentsVue,
  },
  data () {
    return {

    }
    
  }
}
</script>

<style scoped>

</style>
