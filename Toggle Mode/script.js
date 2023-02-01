"use strict";

var toggleBtn=false;

function toggle()
{
    var mainContainer=document.getElementById("mainContainer");
    var heading=document.getElementById("Text");
    toggleBtn=!toggleBtn;
    if(toggleBtn==true)
    {
        heading.style.color="white";
        mainContainer.style.backgroundColor="black";
    }
    else
    {
        heading.style.color="black";
        mainContainer.style.backgroundColor="white";
    }


 
}
var clicked= document.getElementById("toggleButton")
clicked.addEventListener("click",toggle);
