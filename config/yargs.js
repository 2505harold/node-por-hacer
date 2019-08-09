const descripcion = {
    alias:'d',
    demand:true,
    desc: 'Descripcion de la tarea'
};

const completado = {
        alias:'c',
        default:true,
        desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
            .command('crear','Crear una tarea por hacer',{
                descripcion   
            })
            .command('actualizar','Actualiza una tarea por hacer',{
               descripcion,
               completado
            })
            .command('borrar','Borra una tarea',{
                descripcion
            })
            .help()
            .argv;


module.exports={
    argv
}




