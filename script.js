const myWeather = document.getElementById('container')

fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=0873dd387b81dc473ae107f675063248')
    .then((response) => {
        return response.json()
    })

.then((json) => {


            //console.log(json)


            myWeather.innerHTML += `<h1>My weather right now in ${json.name} </h1>`

            myWeather.innerHTML += `<h2>Tempurature is: ${Math.round(json.main.temp - 273.15)} degrees </h2>`

            myWeather.innerHTML += `<h2>Type of weather: ${json.weather[0].description} </h2>`

            myWeather.innerHTML += `<h2>Sunrise at: ${`${sunrise.getHours()}:${sunrise.getMinutes()}`}</h2>`

            myWeather.innerHTML += `<h2>Sunset at: ${`${sunset.getHours()}:${sunset.getMinutes()}`}</h2>`


})


const unixTimestamp = 1572069056

const unixTimestamp2 = 1572102736

let sunrise = new Date(unixTimestamp * 1000)

let sunset = new Date(unixTimestamp2 * 1000)

//console.log(`${sunrise.getHours()}:${sunrise.getMinutes()}`)