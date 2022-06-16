<template>
  <div>
   <app-header></app-header>
   <testComponentsVue v-bind:onePiece="onePiece"></testComponentsVue>
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
       onePiece: [
            {name: "Luffy", speciality: "Rubber man", show: false},
            {name: "Zoro", speciality: "Swordsman", show: false},
            {name: "Sanji", speciality: "Cook", show: false},
            {name: "Nami", speciality: "Thife", show: false},
            {name: "Robin", speciality: "Phoneglif reader", show: false},
            {name: "Brook", speciality: "Skelton and musition", show: false},
        ]
    }
    
  }
}
</script>

<style scoped>

</style>
