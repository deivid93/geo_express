/*(function(w,d){
    console.log(w)
})(window, document)*/


//prototipos
function Animal(n,r){
    this.n = n
    this.r = r
}
Animal.prototype.comer = function(){
   return 'voy a comer !!!'
}
let perro = new Animal('joseph', 'criollo')
//Animal.prototype.bañar()
//Animal.prototype.comer()
perro.n = 'Carm'
let comer = perro.comer()
//console.log(perro); 
//console.assert(4==4, ['1',2,3])

//APIS WEB
//console.log(Event);
//controller = AbortController()
var body = document.body
let div = document.createElement('div')
div.setAttribute('id','principal')
div.setAttribute('class', 'container')
div.style.border = '1px solid '
div.style.width = '15%'
body.prepend(div)
let p = document.getElementsByTagName('p')[0]
let textp = document.createTextNode('Hola aqui en Cali')
p.appendChild(textp)
div.appendChild(p)
btn = document.createElement('button',{class: 'btn-success'})
div.appendChild(btn);
btn.setAttribute('class', 'btn btn-success')
btn.appendChild(document.createTextNode('Guardar'))
div.style.display = "none"

var div_reloj = document.createElement('div')
div_reloj.setAttribute("id", "reloj")
div_reloj.style.border = "1px solid red"
div_reloj.style.width = "15%"
body.prepend(div_reloj)
var titulo_reloj = document.createElement('h3')
titulo_reloj.style.fontSize = "10px"
titulo_reloj.style.paddingLeft = "3px"
var t = document.createTextNode('HORA ACTUAL:')
titulo_reloj.appendChild(t)
div_reloj.prepend(titulo_reloj)
var caja_reloj = document.createElement("input")
caja_reloj.setAttribute("class", "form-control")
div_reloj.appendChild(caja_reloj)
//mover el div hacia la derecha
window.addEventListener('load', function(e){
    div.style.position = 'relative'
    //div.style.animationName = 'example'
    //div.style.animationDuration = '10s'
    var hora_actual = ''
    this.setInterval(function(){
        var fecha = new Date()
        var hora_actual = fecha.getFullYear() +"-"+fecha.getMonth() +"-"+fecha.getDay()+" "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()
        caja_reloj.value = hora_actual
        /*div.animate([
            {opacity: 1,  left: "0px"},
            {opacity: 1,  left: "25%"},
            {opacity: 1,  left: "50%"},
            {opacity: 1, left: "75%"},
            {opacity: 1, left: "100%"},
            {opacity: 1, left: "75%"},
            {opacity: 1,  left: "50%"},
            {opacity: 1,  left: "25%"},
            {opacity: 1, left: "0px"},
        ], 6000)*/
    },1000)
    //caja_texto = document.createTextNode(hora_actual)
    //caja_reloj.appendChild(caja_texto)
})
var custom = new CustomEvent('customer', {detail: {from: 'David', message: 'Hola compatriotas!'}, bubbles: true, cancelable: true, scoped: true, scoped:true})
let bot = document.getElementById("btn")
bot.addEventListener("click", function(e) {
    bot.dispatchEvent(custom)
})

bot.addEventListener("customer",function(e){
    console.log(e.detail.from);
})
////////////////////////////////////////////////////////////
let m = new MouseEvent('tripleClick');
console.log(document.f);








