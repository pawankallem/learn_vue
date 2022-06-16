
<template>
  <div>
    <ul>
        <li @click="char.show=!char.show" v-bind:key="index" v-for="(char, index) in onePiece">
            <h2>{{index+1}}. {{char.name}}</h2>
            <h3 v-show="char.show">{{char.speciality}}</h3>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    props: ['onePiece'],
    
  data() {
    return {}
  },
};
</script>

<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: auto;
    }
    li{
        border: 1px solid black;
        gap: 2px;
        padding: 10px;
        width: 31.5%;
        height: 100px;
    }
    h2{
        text-align: center;
    }
    h3{
        text-align: center;
    }
</style>