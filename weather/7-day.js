let key1 = "744e779d95966e53cb0605e4f7820586";
async function display(lat, log) {
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${log}&exclude=current,hourly,minutely,alerts&units=metric&appid=${key1}`;
  let data = await fetch(`${url}`);
  let res = await data.json();
  let day_data = res.daily;
  displayData(day_data);
  console.log(day_data);
}

function displayData(data) {
  let time = Date().trim().split(" ")[4].split("").slice(0, 5).join("");
  let re = "";
  for (let i = 0; i < time.length; i++) {
    if (time[i] !== ":") {
      re += time[i];
    }
  }
  let Time = Number(re);
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 0; i < data.length - 1; i++) {
    let ele = data[i];
    let div = document.createElement("div");
    let temp = document.createElement("h3");
    temp.innerText = ele.temp.day + "℃";
    temp.style.fontFamily = "sans-serif";
    temp.style.padding = "10px";
    temp.style.width = "0px";
    temp.style.height = "117px";
    temp.style.marginTop = "-20px";
    temp.style.color = "black";
    // temp.style.border = '1px solid red';

    // day sunny
    if (ele.temp.day >= 33) {
      temp.style.color = "red";
      let img = document.createElement("img");
      img.src =
        "https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392__480.png";
      img.style.width = "75px";
      img.style.height = "75px";
      img.style.marginTop = "-10px";
      img.style.position = "relative";
      img.style.zIndex = "-1";
      temp.append(img);
    }

    // clean night
    if (ele.temp.day >= 33 && Time < 06 && Time > 1859) {
      temp.style.color = "red";
      let img = document.createElement("img");
      img.src =
        "https://www.pngkit.com/png/full/230-2309611_luna-png-imagenes-de-la-luna-png.png";
      img.style.width = "75px";
      img.style.height = "75px";
      img.style.marginTop = "-10px";
      img.style.position = "relative";
      img.style.zIndex = "-1";
      temp.append(img);
    }

    if (ele.temp.day >= 33 && Time < 06) {
      temp.style.color = "red";
      let img = document.createElement("img");
      img.src =
        "https://www.pngkit.com/png/full/230-2309611_luna-png-imagenes-de-la-luna-png.png";
      img.style.width = "75px";
      img.style.height = "75px";
      img.style.marginTop = "-10px";
      img.style.position = "relative";
      img.style.zIndex = "-1";
      temp.append(img);
    }

    // day cloudy
    if (ele.temp.day <= 33 && ele.temp.day >= 27 && Time > 06 && Time < 1859) {
      let img = document.createElement("img");
      img.src =
        "https://cdn.pixabay.com/photo/2016/03/18/15/07/slightly-cloudy-1265204__340.png";
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.marginTop = "0px";
      img.style.position = "relative";
      img.style.zIndex = "-1";
      // img.style.border = "1px solid red";
      temp.append(img);
    }

    // hight temperature and rainy day
    // if (ele.temp.day > 27 && Time > 06 && Time < 1859 ) {
    //   let img = document.createElement("img");
    //   img.src =
    //     "https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png";
    //   img.style.width = "80px";
    //   img.style.height = "80px";
    //   img.style.position = "relative";
    //   img.style.zIndex = "-1";
    //   // img.style.border = "1px solid red";
    //   temp.append(img);
    // }

    // night cloudy

    if (
      (ele.temp.day <= 33 && ele.temp.day >= 27 && Time > 1859) ||
      Time < 06
    ) {
      let img = document.createElement("img");
      img.src = "https://icon-library.com/images/cloudy_sky_at_night-512.png";
      img.style.width = "60px";
      img.style.height = "60px";
      img.style.position = "relative";
      img.style.zIndex = "-1";
      // img.style.border = "1px solid red";
      temp.append(img);
    }

    // day rainy
    if (ele.temp.day > 0 && ele.temp.day < 27 && Time > 06 && Time < 1859) {
      let img = document.createElement("img");
      img.src =
        "https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png";
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.position = "relative";
      img.style.zIndex = "-1";
      // img.style.border = "1px solid red";
      temp.append(img);
    }

    // night rainy
    if ((ele.temp.day > 0 && ele.temp.day < 27 && Time > 1859) || Time < 06) {
      let img = document.createElement("img");
      img.src =
        "https://icons.iconarchive.com/icons/icons-land/weather/256/Night-Rain-icon.png";
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.position = "relative";
      img.style.zIndex = "-1";
      // img.style.border = "1px solid red";
      temp.append(img);
    }
    let dayDt = document.createElement("p");
    dayDt.innerText = day[i];
    dayDt.style.fontWeight = "bolder";
    dayDt.style.fontFamily = "sans-serif";
    dayDt.style.color = "#0088AB";
    // dayDt.style.border= '1px solid red';

    let morn = document.createElement("h5");
    morn.innerText = "Morn" + " " + ele.temp.morn + "℃";
    morn.style.fontFamily = "sans-serif";
    if (ele.temp.morn >= 30) {
      morn.style.color = "red";
    }
    if (ele.temp.morn < 30) {
      morn.style.color = "black";
      morn.style.fontWeight = "bolder";
    }

    let night = document.createElement("h5");
    night.innerText = "Night" + " " + ele.temp.night + "℃";
    night.style.fontFamily = "sans-serif";
    night.style.color = "black";

    let div1 = document.createElement("div");
    div1.append(morn, night);
    // div1.style.border="1px solid red"

    div1.style.marginTop = "-30px";
    div.append(dayDt, temp, div1);
    box1.append(div);
  }
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  // pos = "mumbai";
  const crd = pos.coords;
  let lat = crd.latitude;
  let log = crd.longitude;
  console.log(lat, log);
  display(lat, log);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
