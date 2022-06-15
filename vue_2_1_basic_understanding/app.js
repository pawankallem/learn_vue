
new Vue({
    el: "#app",
    data: {
        name: "Pavan",
        job: "Frontend Developer",
        website: "https://lykkebook.com",
        websiteTag: "<a href='https://www.google.com'>Google</a>",
        x: 0 ,
        y: 0 ,
        count: 0,
        user_name: '',
        user_age: '',
        a:0,
        b:0,
        age:20,
    },
    methods: {

        greet: function (time) {
            return "Good " + time + this.name;
        },
        proficiency: function () {
            return "Your Role is " + this.job;
        },
        organization: function ( org ) {
            return "You are going to work with " + org;
        },
        co_ordinates_XY: function (e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        add: function (inc){
            this.count += inc;
        },
        sub: function (dec){
            if (this.count == 0) return ;
            this.count -= dec;
        },
        /*  In methods it always invokes all functions
        addToA: function (){
            console.log("print a");
            return this.a+this.age;
        },
        addToB: function (){
            console.log("print b");
            return this.b+this.age;
        }
        */

    },
    computed: {
        /* In Computed it always invokes required functions only */
        addToA: function (){
            console.log("print a");
            return this.a+this.age;
        },
        addToB: function (){
            console.log("print b");
            return this.b+this.age;
        },
    }

})

