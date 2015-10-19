/**
 * 
 */

function displayTime(){
	var elt = document.getElementById("clock");
	var now = new Date();
	elt.innerHTML = now.toLocaleTimeString();
	setTimeout(displayTime,2000);
}

function chgBack(){
	var back = document.getElementById("clock");
	back.style.backgroundColor = "#dff";
}

//window.onload = displayTime;
setTimeout(chgBack, 5000);

