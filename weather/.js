let d= new Date(document.lastModified);

let lastMonth=d.getMonth()+1;
let lastDay=d.getDate();
let lastYear=d.getFullYear();


document.getElementById("date").textContent= lastMonth + "\/" +  lastDay  + "\/" + lastYear + " " + d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes() + ":" + (d.getSeconds()<10?'0':'') + d.getSeconds();

let z=new Date();
document.getElementById("copyrightyear").textContent=z.getFullYear();
