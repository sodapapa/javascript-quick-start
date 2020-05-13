

const weather = document.querySelector('.js-weather');
const COORDS = "coords";
const API_KEY = "867063f9618508b7ecd849629441c5b4";

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json); 
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} C @ ${place}`
    })  
}


function saveCoords(coordsObj){     
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuc(position){
    console.log(position.coords);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;        
    const coordsObj = {
        latitude,longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoFail(){
    console.log('cant load current location')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuc,handleGeoFail)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords == null){
        askForCoords();    
    }else{
        // get weather
        const parseCoords = JSON.parse(loadedCoords);       
        
        getWeather(parseCoords.latitude,parseCoords.longitude);

    }
}

function init(){
    loadCoords();
}

init();