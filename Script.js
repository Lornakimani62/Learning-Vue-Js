var vm = new Vue({
    el: "#Blog",
    data:{
        title:'Today Blog highlights',
        number: 0,
        name:'Lorna',
        x:0,
        y:0,
        website:'https://www.bbc.com',
        search:'',
        read:true,
        submit:true,
        objectArray:[
        {title:"Raila's probe for the 2022 presidency"},
        {title:"The causes of early teenage pregnancy"},
        {title:"UhuRuto in trobule with the many corruption scandals facing Ruto", number:10},
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
            alert("Your account has been created succesfully");
        },
        searching:function(){
            console.log("You typed a number for you search");
        }
    },
    computed: {
        computedClasses:function(){
            return {
                readArticle: this.read
            }
        }
    },
    });
