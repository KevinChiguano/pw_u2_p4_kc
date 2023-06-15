//options Api
const app = Vue.createApp({
    //opcion1,
    //opcion2,
    //opcion..n

    //template:`
    //<h1>Hola mundo</h1>
    //<p>Desde Vue.JS</p>
    //<p>{{1+1}}</p>
    //`
    data(){
        return{
            numero:""
        }
    },

    methods:{
        addInput(input){
            document.getElementById("input").value +=input;
          },
          
          operacionCalcular(){
            var input= document.getElementById("input").value;
           document.getElementById("input").value=eval(input)
          }
    }
    

})

//# -> identificar un identificadr
app.mount('#myAppCalculadora')