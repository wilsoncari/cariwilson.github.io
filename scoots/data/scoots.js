function toggleMenu() {
   
    document.getElementById("primaryNav").classList.toggle("hide");
}



const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
let q= "3530103";
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


document.getElementById("temp").innerHTML=temp.toFixed(0);
document.getElementById("description").innerHTML=desc;
document.getElementById("windspeed").innerHTML=windspeed;
document.getElementById("humidity").innerHTML=humidity;
});

const apiFURL = "https://api.openweathermap.org/data/2.5/forecast?";
let Fcity= "3530103";
let Fappid = "24f7a33d913e190b464120009f1acb1f";
let Funits= "imperial";

fetch(apiFURL + "id=" + Fcity + "&appid=" + Fappid + "&units=" + Funits)
    .then((response)=>response.json())
    .then((jsObject)=> {
        var fiveday = jsObject.list.filter(function (list) {
            return list.dt_txt.includes("12:00:00");
        });

    for (i=4; i < fiveday.length; i++){
    
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


const RentalsapiUrl = "https://wilsoncari.github.io/cariwilson.github.io/scoots/data/data.json";
fetch(RentalsapiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const rentals = jsonObject['rentals']; 
        for (let i = 0; i < rentals.length; i++ ){
         console.log(rentals[i].reservedhalf);   
    let rentalinfo = document.createElement('section');
    let h2= document.createElement('h2');
    let p=document.createElement('p');
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let p3=document.createElement('p');
    let p4=document.createElement('p');
    let img=document.createElement('img');
h2.textContent=rentals[i].type + ' ' + rentals[i].model;
rentalinfo.appendChild(h2);
p.textContent='Seats: ' + rentals[i].seats;
rentalinfo.appendChild(p);
p1.textContent='Half-day (3 hrs) rental with reservation: ' + rentals[i].reservedhalf;
rentalinfo.appendChild(p1);
p2.textContent='Full-day rental with reservation: ' + rentals[i].reservedfull;
rentalinfo.appendChild(p2);
p3.textContent='Half-day (3 hrs) rental/walk-ins: ' + rentals[i].walkinhalf;
rentalinfo.appendChild(p3);
p4.textContent='Full-day rental/walk-ins: ' + rentals[i].walkinfull;
rentalinfo.appendChild(p4);
img.setAttribute('src', rentals[i].img);
img.setAttribute('alt', rentals[i].type + ' ' + rentals[i].model + '-' + i+1);
rentalinfo.appendChild(img);
document.querySelector('table.rentalinfo').appendChild(rentalinfo);


        }
      });

      let d= new Date(document.lastModified);

      let lastMonth=d.getMonth()+1;
      let lastDay=d.getDate();
      let lastYear=d.getFullYear();
      
      
      document.getElementById("date").textContent= lastMonth + "\/" +  lastDay  + "\/" + lastYear + " " + d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes() 
      let z=new Date();
      document.getElementById("copyrightyear").textContent=z.getFullYear();