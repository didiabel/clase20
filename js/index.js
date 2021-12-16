// Tu codigo JS va acá
let btn = document.querySelector(".btn")


let cityname = document.querySelector("#ciudad")
let textoCiudad = document.querySelector("#texto-ciudad")
let temperatura = document.querySelector("#temperatura")
let icono = document.querySelector("#icono")
let pronostico = document.querySelector("#pronostico")
let humedad = document.querySelector("#humedad")
let viento = document.querySelector("#viento")

const peticionClima = async() => {

    const kelviToCelsius = (kelvi) => {
        return parseInt(kelvi-273.15).toFixed()
    }
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value} &appid=7ca589cf4950e4cd0136f0a24e55c404`)
    const ciudad = await response.json()

    textoCiudad.textContent = ciudad.name
    temperatura.textContent= kelviToCelsius(ciudad.main.temp) + " C"; 
    icono.src = `http://openweathermap.org/img/w/${ciudad.weather[0].icon}.png`
    pronostico.textContent = ciudad.weather[0].description
    humedad.textContent = ciudad.main.humidity
    viento.textContent = ciudad.wind.speed
}

btn.addEventListener("click", peticionClima)