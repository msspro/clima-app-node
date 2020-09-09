const axios = require('axios');

const getClima = async(lat, lng) => {
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/forecast?lat=${lat}&lon=${lng}&cnt=1&units=metric`,
        headers: { 'x-rapidapi-key': '9e51d727a8msh364a0617dafb082p1460f4jsn3bf07601939e' }
    });

    const resp = await instance.get();

    return resp.data.list[0].main;
}

module.exports = {
    getClima
}