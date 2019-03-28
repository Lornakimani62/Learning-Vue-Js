Vue.component("sources", {
    template: '<i><p>These are the news from your most trusted newssource {{name}}</p></i>',
    data: function(){
        return{
            name: "British Broad Casting",
        }
    }
});

var one = new Vue({
    el:"#vueInstance1",
});

var two = new Vue({
    el: "#Blog",
    data:{
        title:'Today Blog highlights',
        number: 0,
        name:'Lorna',
        x:0,
        y:0,
        website:'https://www.bbc.com',
        search:"Ruto",
        read:true,
        submit:true,
        objectArray:[
        {title:"Raila's probe for the 2022 presidency"},
        {title:"The causes of early teenage pregnancy"},
        {title:"UhuRuto in trobule with the many corruption scandals facing Ruto"},
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
            alert("You are about to leave this page")
        },
        alerted:function(){
            this.name=this.$refs.input.value
        },
        searching:function(){
            console.log(this.$refs);
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
