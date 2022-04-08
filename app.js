const express = require('express')
var app = express()
//motor de plantilla
app.set('view engine', 'ejs')
//detectamos el directorio public
//app.use(express.static(__dirname+'/public'))
//index page
app.get('/',function(req,res,next){
  var mascotas = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ]
  res.render('pages/index',{
    mascotas: mascotas
  })
})
//Levantamos el servidor
const port = process.debugPort 
app.listen(port, () => {
    console.log(`SERVER ESCUCHANDO CON EXPRESS EN PUERTO : ${port}`);
    console.log(Date());
})




