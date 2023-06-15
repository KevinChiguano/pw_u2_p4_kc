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
    data() {
        return {
            numero: "",
        }
    },

    methods: {
        obtener(event) {
            this.numero += event.target.innerText;
            console.log(this.numero)
        },


        operacionCalcular(event) {

            pantalla = event.target.innerText;

            if (pantalla != '=') {
                this.numero += pantalla
            } else {
                resultado = eval(this.numero)
                this.numero = resultado.toString()
            }

        },

        borrar(){
            this.numero = ""
        }
    }


})

//# -> identificar un identificadr
app.mount('#myAppCalculadora')