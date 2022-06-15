
new Vue({
    el: "#app",
    data: {
        health: 100,
        burst: false,
        half_health: false,
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if( this.health <= 50) {
                this.half_health = true;
            }
            if ( this.health <= 0) {
                this.burst = true;
            }
        },
        reset: function () {
            this.health = 100;
            this.burst = false;
            this.half_health = false;
        }
    }
})