const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.pirateweather.net/forecast/AeFBZ6AoDo4vn8iZerJCg4SADoTREqPj4ldnDeOl/' + latitude + ',' + longitude 

 request ({ url, json: true}, (error, {body}) => {
    if (error) {
        callback('Unable to connect to the weather service', undefined)
    }else if (body.error){
        callback('Unable to find location',undefined)
    }else {
       
        callback(undefined,'Status: '+ body.daily.data[0].summary + '. Temperature: ' + body.currently.temperature + '. This high today is ' + body.daily.data[0].temperatureHigh  +' with a low of ' + body.daily.data[0].temperatureLow  + '. Humidity:' + body.daily.data[0].humidity +   '. Chance of Rain: ' + body.currently.precipProbability + '%')
    }
})
}


module.exports = forecast