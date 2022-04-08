const express = require('express')
var app = express()
const port = process.debugPort 
app.listen(port, () => {
    console.log(`SERVER ESCUCHANDO CON EXPRESS EN PUERTO : ${port}`);
    console.log(Date());
})
app.use(express.static(__dirname+'/public'))

  //NIVEL APLICACION
/*app.get('/', function(req,res){
    console.log('Hola');
    //res.send("<p>Hola express sos como el sol</p")
    res.send(__dirname)
})*/

  /*app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  }, (req,res,next) => {
      console.log(req.method);
  });*/

  /*app.get('/user/:id', function (req, res, next) {
    if (req.params.id == 1) next('route');
    else next();
  }, function (req, res, next) {
    res.send('regular');
  });
  
  // handler for the /user/:id path, which prints the user ID
  app.get('/user/:id', function (req, res, next) {
    res.send('special');
  });*/

//NIVEL DIRECCIONAMIENTO


var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + '/public/index.html')  
  console.log('Time:', Date.now());
  next();
});

/*router.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });
  
  // a middleware sub-stack that handles GET requests to the /user/:id path
  router.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id == 0) next('route');
    // otherwise pass control to the next middleware function in this stack
    else next(); //
  }, function (req, res, next) {
    // render a regular page
    res.render('regular');
  });*/

  app.use('/', router);


/*const http = require('http')
const port = process.debugPort
const server = http.createServer(function(req,res){
    res.setHeader("Content-Type", "text/html")
    res.write("<p>Hola pepe ya estoy con node tengo que esforzarme lo suficiente como para no desconcentrarme y ser el mejor en lo que hago, deseo ayudar a la comunidad que mas lo necesite , pero debo esforzarme</p>")
    res.end("<b>Hello!!!!!</b>")
    
})
server.listen(port, function(){
    console.log(`SERVER RUNNING TO PORT ${port}`);
})*/


