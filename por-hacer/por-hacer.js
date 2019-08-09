const fs = require('fs');

let listadoPorHacer = []

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json',data,(err)=>{
        if (err) throw new Error ('Tarea no se guardo:',err);
    })
}

const cargarDB = ()=>{
    try{
        listadoPorHacer = require('../db/data.json')
    }
    catch{
        listadoPorHacer = [];
    }
}

const getListado = ()=>{
    cargarDB()
    return listadoPorHacer;
}

const actualizar = (descripcion,completado = true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=> tarea.descripcion === descripcion)
    if (index > -1){
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    }
    else{
        return true
    }
}

const borrar = (descripcion)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>tarea.descripcion === descripcion)
    if (index > -1){
        listadoPorHacer.splice(index,1)
        guardarDB();
        console.log(`La tarea ${descripcion} ubicado en indice ${index} fue borrada`)
    }
    else{
        console.log("No se puedp borrar")
    }
}


const crear = (descripcion) =>{

    cargarDB();

    let porHacer ={
        descripcion,
        completado:false
    }

    listadoPorHacer.push(porHacer)
    guardarDB();

    return porHacer;
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}