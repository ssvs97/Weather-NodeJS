const got = require('got');

async function getWeather(city){
    try{
        const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query=${city}`;
        const request = await got(url);
        return request.body;     
    }catch(error){
        console.log(error);
    }
}

module.exports = {'getWeather': getWeather }