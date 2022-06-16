
<template>
    <ul>
        <li id="changeColor" v-bind:key="index" v-for="(employee, index) in employee_arr"> {{index+1}}. {{employee}}</li>
    </ul>
</template>

<script>

export default {

    data () {
        return {
            employee_arr: ["Pavan", "Gowthom", "Rajinikanth", "Koushik"]
        }
    }
}

</script>

<style scoped>
li{
    color: green;
}
#changeColor{
    color: teal;
}
</style>