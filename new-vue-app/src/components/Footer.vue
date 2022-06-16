
<template>
  <div>
    <footer>
        <h1> Copyrights for this application ISA: {{year}}</h1>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
        year: 2022,
    };
  },
};
</script>

<style scoped>
    footer{
        background: purple;
        padding: 10px;
    }
    h1{
        text-align: center;
        padding: 10px;
    }
</style>