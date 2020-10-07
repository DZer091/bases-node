//requireds
const fs = require('fs');
const colors = require('colors');

//module.exports.crearArchivo = (base) => { -----> sirve de igual manera al exportar así
createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El parámetro ingresado no es un número');
            return; //para finalizar función
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`.yellow);
            }
        });

    });
}

listarTabla = (base, limite = 10) => {

    console.log((`Esta es la tabla de multiplicar del ${base}`).red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }


}

module.exports = {
    crearArchivo: createFile,
    listarTabla
}