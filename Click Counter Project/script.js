
"use strict";

function clickCount()
{
	count++;
	document.getElementById("Counter").innerHTML = "Box Clicked "+count+" Times";
}

var boxClick=document.getElementById("box");
var count=0;
boxClick.addEventListener("click",clickCount);