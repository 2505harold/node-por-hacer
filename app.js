//const argv = require("yargs").argv;
const {argv} = require('./config/yargs')
const tarea = require('./por-hacer/por-hacer')
const colors = require('colors')


let comando = argv._[0];
switch(comando){
    case 'crear':
        let tareaPorhacer = tarea.crear(argv.descripcion);
        console.log(tareaPorhacer)
        break;
    case 'listar':
        //quiero poder cargar el listado del arreglo
         let listarTareas = tarea.getListado();
         for(let tarea of listarTareas){
             console.log('==== Por Hacer ===='.green)
             console.log(tarea.descripcion)
             console.log(`Estado : ${tarea.completado}`)
             console.log('==================='.green)
         }
        break;
    case 'actualizar':
        let actualizado = tarea.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado)
        break;
    case "borrar":
        let borrado = tarea.borrar(argv.descripcion);
        //console.log(borrado)
        break;
    default:
        console.log('Comando no definido')
        break;
}