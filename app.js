//requireds
//const fs = require('fs');

//const fs = require('express');//Paquete que se instala. Son paquetes no nativos de node, si no más bien se personas que realizaron una paquetización
//const fs = require('./fs');//Archivos que se encuentran en nuestra computadora

const argv = require('./config/yargs').argv;

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo con l tabla de multiplicar ingresada y su límite deseado', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// fin require //

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(respuesta => console.log(`Archivo creado: ${respuesta}`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}

//console.log(argv);

//let base = '4';

//let argv2 = process.argv;
// let parametro = argv[2]; //arreglos en js empiezan con indice 0
// let base = parametro.split('=')[1]; //para obtener el primer elemento del split

//console.log(argv);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(error => console.log(error));