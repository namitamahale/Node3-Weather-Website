const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.pirateweather.net/forecast/AeFBZ6AoDo4vn8iZerJCg4SADoTREqPj4ldnDeOl/' + latitude + ',' + longitude 

 request ({ url, json: true}, (error, {body}) => {
    if (error) {
        callback('Unable to connect to the weather service', undefined)
    }else if (body.error){
        callback('Unable to find location',undefined)
    }else {
       
        callback(undefined,'Status: '+ body.daily.data[0].summary + '. It is currently: ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + 'Humidity:' + body.daily.data[0].humidity +' with a low of ' + body.daily.data[0].temperatureLow + ". There is a " 
        + body.currently.precipProbability + '% chance of rain.')
    }
})
}


module.exports = forecast