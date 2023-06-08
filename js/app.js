console.log('Componente Vue')
console.log(Vue)

//options Api
const app = Vue.createApp({
    //opcion1,
    //opcion2,
    //opcion..n

    template:`
    <h1>Hola mundo</h1>
    <p>Desde Vue.JS</p>
    `
    

})

//# -> identificar un identificadr
app.mount('#myAplication')