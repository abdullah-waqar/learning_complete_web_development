const getWeatherButton = document.querySelector("button");

const locationInputField = document.getElementById("location");

const weatherInfoDiv = document.getElementById("weatherInfo")

getWeatherButton.addEventListener( "click", () => {
    let location = locationInputField.value

    const api = fetch(`http://api.weatherapi.com/v1/current.json?key=4369989328eb4f588fc152051261306&q=${location}&aqi=yes`)

    api.then( response => response.json())
    .then( data => { console.log(`Temperature in ${location} is: ${data.current.temp_f}`) 
    
        weatherInfoDiv.textContent = `Temperature in ${location} is: ${data.current.temp_f}F / ${data.current.temp_c}C`

    })
    .catch( error => console.log(error) ) 


    

} )