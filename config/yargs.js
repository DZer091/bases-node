const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo con l tabla de multiplicar ingresada y su límite deseado', opciones)
    .help()
    .argv;

module.exports = {
    argv
}