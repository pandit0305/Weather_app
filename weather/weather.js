// let city = "London";
let key = "b5a116c51baabc5a45385968d6deab76";
// api = b5a116c51baabc5a45385968d6deab76
// let url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b5a116c51baabc5a45385968d6deab76"
let res;
async function getWeather(){
    try{
        let city = document.getElementById("city").value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        let data = await fetch(`${url}`);
        res = await data.json();
        console.log(res); 
        appendData(res)
    }catch(err){
        // console.log("error:",err);
    }
} 
getWeather();

function appendData(res){
    container.innerHTML=null;
    let Name = document.createElement("h3");
    Name.innerText = `${res.name}`;
    Name.style.color = "#fd1d1d";
    Name.style.fontSize="35px"
    let country = document.createElement("h3");
    country.innerText = `${res.sys.country}`;
    country.style.color = "blue";
    country.style.fontSize="40px";
    country.style.marginTop="-20px";
    let temp = document.createElement("p");
    temp.innerText = `${res.main.temp}℃`;
    temp.style.fontSize="40px";
    temp.style.marginTop="-30px";

    let min_temp = document.createElement("p");
    min_temp.innerText = `Min-Temp: ${res.main.temp_min}`
    let max_temp = document.createElement("p");
    max_temp.innerText = `Max-Temp: ${res.main.temp_max}`

    let feel = document.createElement("h4");
    feel.innerText=`Feels like ${res.main.feels_like}℃. Scattered clouds. Gentle Breeze`;
    feel.style.marginTop="-20px";

    let humid = document.createElement("p");
    humid.innerText=`Humidity: ${res.main.humidity}%`;
    let pressure = document.createElement("p");
    pressure.innerText = `Pressure: ${res.main.pressure}hPa`;
    
    let sunrise = document.createElement("p");
    sunrise.innerText = `Sunrise: ${res.sys.sunrise}`;
    
    let sunset = document.createElement("p");
    sunset.innerText = `Sunset: ${res.sys.sunset}`;

    let visibility = document.createElement("p");
    visibility.innerText = `Visbility: ${res.visibility}`;

    let wind = document.createElement("p");
    wind.innerText = `Wind: ${res.wind.speed}`;

    let div1 = document.createElement("div");
    div1.setAttribute("id", "sun");
    div1.append(min_temp, max_temp, sunrise, sunset);
    
    let div2 = document.createElement("div");
    div2.append(humid, pressure, visibility);
    div2.style.marginLeft="30px";

    let div3 = document.createElement("div");
    div3.append(div1, div2);
    div3.style.display="flex";
    container.append(Name,country,temp, feel, div3);

    let map = document.getElementById("gmap_canvas");
    map.src=`https://maps.google.com/maps?q=${res.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
appendData(res);


