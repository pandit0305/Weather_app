
let key1 = "744e779d95966e53cb0605e4f7820586";
async function display(lat, log){

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${log}&exclude=current,hourly,minutely,alerts&units=metric&appid=${key1}`
    let data = await fetch(`${url}`);
    let res = await data.json();
    let day_data = res.daily;
    displayData(day_data)
    console.log(day_data);
}

function displayData(data){
    let day = ["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];
    for(let i=0; i<data.length-1; i++){
        let ele = data[i];
        let div = document.createElement("div");
        let temp = document.createElement("h3");
        temp.innerText = ele.temp.day +'℃';
        temp.style.fontFamily="sans-serif";
        temp.style.padding="10px";
        temp.style.width="0px";
        temp.style.height="117px";
        temp.style.marginTop="-20px";
        temp.style.color="white";
        // temp.style.border = '1px solid red';

        if(ele.temp.day > 35){
            temp.style.color="red";
            let img = document.createElement("img");
            img.src = "https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392__480.png";
            img.style.width= "80px";
            img.style.height="80px";
            img.style.marginTop="-10px";
            img.style.position="relative";
            img.style.zIndex="-1";
            temp.append(img);
        }   
        if(ele.temp.day < 35){
            let img = document.createElement("img");
            img.src = "https://cdn.pixabay.com/photo/2016/03/18/15/07/slightly-cloudy-1265204__340.png";
            img.style.width= "80px";
            img.style.height="80px";
            img.style.marginTop="0px";
            img.style.position="relative";
            img.style.zIndex="-1";
            // img.style.border = "1px solid red";
            temp.append(img);
        }
        let dayDt = document.createElement("p");
        dayDt.innerText = day[i];
        dayDt.style.fontWeight="bolder";
        dayDt.style.fontFamily="sans-serif";
        dayDt.style.color="white";
        // dayDt.style.border= '1px solid red';

        let morn = document.createElement("h5");
        morn.innerText = "Morn"+" "+ele.temp.morn +'℃';
        morn.style.fontFamily="sans-serif";
        if(ele.temp.morn>=30){
            morn.style.color="red";
        }
        if(ele.temp.morn<30){
            morn.style.color="white"; 
            morn.style.fontWeight="bolder";
        }

        let night = document.createElement("h5");
        night.innerText = "Night"+" "+ele.temp.night +'℃';
        night.style.fontFamily="sans-serif";
        night.style.color="white"; 


        let div1 = document.createElement("div");
        div1.append(morn, night);
        // div1.style.border="1px solid red"

        div1.style.marginTop="-30px";
        div.append(dayDt, temp, div1);
        box1.append(div);
    };
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    // pos = "mumbai";
    const crd = pos.coords;
    let lat = crd.latitude;
    let log = crd.longitude;
    console.log(lat, log)
    display(lat, log);

  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  