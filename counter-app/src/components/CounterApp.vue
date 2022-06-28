<template>
  <div>
    <h1> Count is : {{totalCount}}</h1>
    <div>
        <button @click="increseCount(1)"> Increment Count </button>
        <button @click="decrementCount(1)"> Decrement Count </button>
    </div>
    <div>
        <button @click="increseCount(10)"> Increment by 10 </button>
        <button @click="decrementCount(10)"> Decrement by 10 </button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    computed: {
        ...mapGetters(['totalCount'])
    },
    methods: {
        ...mapActions(['increseCount' , 'decrementCount'])
    }

}
</script>

<style>

</style>