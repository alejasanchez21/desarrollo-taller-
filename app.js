const lib_express = require ("express");
const appServer = lib_express ();
var lista_usuario = [];

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
   }
);


   
appServer.post('/agregarusuario', ()=>{

    var obj_usuario =  {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        edad : req.body.edad,
        carrera : req.body.carrera, 
    
    }

    lista_usuario.push(usuario);
    

})