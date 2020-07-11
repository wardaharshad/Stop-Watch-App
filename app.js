var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var startbutton = document.getElementById("start");
var interval;
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML = sec;
        msec=0;
    }else if (sec>=60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
 }
 function start(){
interval = setInterval(timer,10);
//startbutton.onclick +='disabled';
startbutton.disabled = true; 
}

 function pause(){
    startbutton.disabled = false; 
     clearInterval(interval);
 }
 function reset(){
    startbutton.disabled = false; 
    clearInterval(interval);
    min=0;
    sec=0;
    msec=0
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
 }