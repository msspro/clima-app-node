const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
//lugar.getLugarLatLng(argv.direccion).then(console.log);
//clima.getClima(37.774929, -122.419418).then(console.log).catch(console.log);

let getInfo = (direccion) => {
    let dataLugar;
    let dataClima;
    lugar.getLugarLatLng(argv.direccion).then(resp => {
            dataLugar = resp;
            //console.log(dataLugar);
            clima.getClima(dataLugar.lat, dataLugar.lng).then(resp => {
                    dataClima = resp;
                    //console.log(dataClima);
                    console.log(`El clima de ${dataLugar.direccion} es de ${dataClima.temp}`);
                })
                .catch(err => { console.log(`No se pudo determinar el clima de ${direccion}`) });
        })
        .catch(err => { console.log(`No se pudo determinar la ubicacion de ${direccion}`, err) });
}

const getInfo2 = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        console.log(`El clima de ${coords.direccion} es de ${temp.temp}`);
    } catch (exp) {
        console.log(`No se pudo determinar la ubicacion de ${direccion}`, exp)
    }
}

getInfo2(argv.direccion);