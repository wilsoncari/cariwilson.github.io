let temp=document.getElementById("temp").innerHTML;
let windspeed=document.getElementById("windspeed").innerHTML;
let windspeedexponent=Math.pow(windspeed, .16);
let wc=35.74+(.6215*temp)-(35.75*windspeedexponent)+(.4275*temp*windspeedexponent);

document.getElementById("windchill").innerHTML=wc.toFixed(0);



