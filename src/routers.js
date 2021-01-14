const express = require('express');
const utils = require('./utils.js');

const router = new express.Router();

router.get('/weather',(req , res) =>{

    if(!req.query.search){
        return res.send({
            error : 'Please insert a search term',
            example : 'weather?search="alex"'
        })
    }

    const getWeather =utils.getWeather(req.query.search);
    getWeather.then((result)=>{
        const data = JSON.parse(result);

        let url =`${data.current.weather_descriptions}night.png`;
        if(data.current.is_day != "no")
            url =`${data.current.weather_descriptions}morning.png`;
            
        res.render('../views/weather.hbs' ,{
            city : `${data.location.name},${data.location.country}`,
            temp : `${data.current.temperature}° C`,
            url : url.replaceAll(' ','')
        });
    })
})

module.exports = router;