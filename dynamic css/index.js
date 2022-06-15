
new Vue({
    el: "#app",
    data: {
        name: "hello",
        available: false,
        nearby: false,
    },
    methods: {

    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    }

})