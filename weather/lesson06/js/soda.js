const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
let q= "5607916";
let appid = "24f7a33d913e190b464120009f1acb1f";
let units= "imperial";

fetch(apiURL + "id=" + q + "&appid=" + appid + "&units=" + units)
.then((response)=>response.json())
.then((jsObject)=> {
let temp=jsObject.main.temp;
let desc=jsObject.weather[0].description;
let humidity=jsObject.main.humidity;
let windspeed=jsObject.wind.speed;
let windspeedexponent=Math.pow(windspeed, .16);
let wc=35.74+(.6215*temp)-(35.75*windspeedexponent)+(.4275*temp*windspeedexponent);

document.getElementById("windchill").innerHTML=wc.toFixed(0);
document.getElementById("temp").innerHTML=temp.toFixed(0);
document.getElementById("description").innerHTML=desc;
document.getElementById("windspeed").innerHTML=windspeed;
document.getElementById("humidity").innerHTML=humidity;
});

const apiFURL = "https://api.openweathermap.org/data/2.5/forecast?";
let Fcity= "5607916";
let Fappid = "24f7a33d913e190b464120009f1acb1f";
let Funits= "imperial";

fetch(apiFURL + "id=" + Fcity + "&appid=" + Fappid + "&units=" + Funits)
    .then((response)=>response.json())
    .then((jsObject)=> {
        var fiveday = jsObject.list.filter(function (list) {
            return list.dt_txt.includes("18:00:00");
        });

    for (i=0; i < fiveday.length; i++){
        
        let date= new Date(fiveday[i].dt_txt.substr(0, 10)+ "T" + fiveday[i].dt_txt.substr(11, 8) + "Z");
        var weekday = new Array(7);
        weekday[0]="SUN";
        weekday[1]="MON";
        weekday[2]="TUE";
        weekday[3]="WED";
        weekday[4]="THU";
        weekday[5]="FRI";
        weekday[6]="SAT";

        let day= weekday[date.getDay()];
        let icon= "https://openweathermap.org/img/w/" + fiveday[i].weather[0].icon + ".png";
        let desc =  fiveday[i].weather[0].description;
        let temp = fiveday[i].main.temp;

        document.getElementById("day" + (i + 1)).innerHTML=day;
        document.getElementById("icon" + (i +1)).setAttribute('src', icon);
        document.getElementById("icon" + (i +1)).setAttribute('alt', desc);
        document.getElementById("temp" + (i +1)).innerHTML = temp.toFixed(0) + "&#8457";
    }



});

const apiEURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(apiEURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns']; 
        for (let i = 0; i < towns.length; i++ ){
        
            if (towns[i].name.includes("Soda Springs")){
                let events=towns[i].events;
                let eventItems=document.createElement('div');
                let header=document.createElement('h2');
                header.textContent="Upcoming Events: ";
                eventItems.appendChild(header);
                
                for (let i=0; i<events.length; i++) {
                    let A = document.createElement('p');
                    A.textContent=events[i];
                    eventItems.appendChild(A);
                }
                document.querySelector('div.townevents').appendChild(eventItems);

            }
        }
    });

