<template>
<div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  components:{

  }

}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  width: 200px;
}
.form {
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 5px;
    margin: auto;
}
input {
    height: 40px;
    text-align: center;
    border: 1px solid skyblue;
    border-radius: 10px;
    font-size: 100%;
}
.submit {
    background: skyblue;
    color: #fff;
    font-size: 120%;
    border-radius: 2px;
    cursor: pointer;
}
</style>
