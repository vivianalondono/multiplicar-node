const argv = require('./config/yargs').argv;

const { createArchivo, listarTabla } = require('./multiplicar');

let comando  = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        createArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${ archivo }`))
        .catch(e => console.log(e));
    break;

    default:
        console.log('Comando desconocido');

}


