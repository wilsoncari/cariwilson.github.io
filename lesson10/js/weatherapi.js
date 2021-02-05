const apiURL = "http://api.openweathermap.org/data/2.5/weather?";
let q= "5604473";
let appid = "24f7a33d913e190b464120009f1acb1f";
let units= "imperial";

fetch(apiURL + "id=" + q + "&appid=" + appid + "&units=" + units)
.then((response)=>response.json())
.then((jsObject)=> {
console.log(jsObject);
document.getElementById('current-temp').textContent = jsObject.main.temp;
let icon = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png';
let desc=jsObject.weather[0].description;
document.getElementById('imagesrc').textContent = icon;  // informational specification only
document.getElementById('icon').setAttribute('src', icon);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});
