// CLOCK

function updateClock(){

let now=new Date();

let h=now.getHours();
let m=now.getMinutes();
let s=now.getSeconds();

let message="";

if(h>=5 && h<12){
message="🌅 Good Morning";
}
else if(h>=12 && h<18){
message="☀️ Good Afternoon";
}
else if(h>=18 && h<21){
message="🌇 Good Evening";
}
else{
message="🌙 Good Night";
}

document.getElementById("emoji").innerText=message;

if(h<10) h="0"+h;
if(m<10) m="0"+m;
if(s<10) s="0"+s;

document.getElementById("clock").innerText=h+":"+m+":"+s;

}

setInterval(updateClock,1000);

updateClock();


// TIMER

let timerInterval;

function startTimer(){

clearInterval(timerInterval);

let minutes=document.getElementById("minutes").value;

let totalSeconds=minutes*60;

timerInterval=setInterval(function(){

let m=Math.floor(totalSeconds/60);
let s=totalSeconds%60;

if(m<10) m="0"+m;
if(s<10) s="0"+s;

document.getElementById("timerDisplay").innerText=m+":"+s;

totalSeconds--;

if(totalSeconds<0){

clearInterval(timerInterval);

document.getElementById("timerDisplay").innerText="🏁 Finished";

}

},1000);

}

function resetTimer(){

clearInterval(timerInterval);

document.getElementById("timerDisplay").innerText="00:00";

}


// STOPWATCH

let swTime=0;
let swInterval=null;

function startStopwatch(){

if(swInterval!==null) return;

swInterval=setInterval(function(){

swTime++;

let h=Math.floor(swTime/3600);
let m=Math.floor((swTime%3600)/60);
let s=swTime%60;

if(h<10) h="0"+h;
if(m<10) m="0"+m;
if(s<10) s="0"+s;

document.getElementById("stopwatch").innerText=h+":"+m+":"+s;

},1000);

}

function stopStopwatch(){

clearInterval(swInterval);

swInterval=null;

}

function resetStopwatch(){

clearInterval(swInterval);

swInterval=null;

swTime=0;

document.getElementById("stopwatch").innerText="00:00:00";

}
