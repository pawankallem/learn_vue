
<template>
  <div>
    <h1> Hello there I am the Counter Component </h1>
    <h3 style="color:red" > Count is {{count}}</h3>
  </div>
</template>

<script>
export default {

    data() {
        return {
            count: 0,
        }
    }
}
</script>

<style>

</style>