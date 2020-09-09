const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodoeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodoeUrl}`,
        headers: { 'x-rapidapi-key': '9e51d727a8msh364a0617dafb082p1460f4jsn3bf07601939e' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultadoas para ${dir}`);
    }

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}