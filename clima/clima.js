const axios = require('axios');

const getClima = async(lat, lng) => {

    let apiKey = '13ed1a8f09eeeb651aa3c080937ea33d';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;

    let resp = await axios.get(url);

    // if (resp.cod !== '200') {
    //     throw new Error(`Las coordenadas no son válidas. Lat: ${lat}. Long: ${lng}`);
    // }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}