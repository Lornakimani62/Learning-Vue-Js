var vm = new Vue({
    el: "#Blog",
    data:{
        title:'Today Blog highlights',
        number: 0,
        name:'Lorna',
        x:0,
        y:0,
        website:'https://www.bbc.com',
        search:'Search for blog articles',
        objectArray:[
        {title:"Today's highlights", number:12},
        {title:"Last Week Highlights", number:10},
    ],
    },
    methods: {
        greet:function(time){
            return "Good"+ ' '+ time+' ' +this.name ;
        },
        add:function(inc){
            this.number += inc;
        },
        substract:function(dec){
            this.number -=  dec;
        },
        updateXY:function(event){
            console.log(event);
            this.x = event.offsetX
            this.y = event.offsetY

        },
        alert:function(){
            alert("You are trying to visit a new website");
        },
        searching:function(){
            console.log("You typed a number for you search");
        }


    },
    });
