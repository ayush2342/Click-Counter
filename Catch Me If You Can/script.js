"use strict";

var box=document.getElementById("InnerBox");
var w = window.innerWidth-box.offsetWidth;
var h = window.innerHeight-box.offsetHeight;


box.addEventListener("mouseover",function()
{
    console.log(Math.random());
    let top=Math.random()*h;
    let left=Math.random()*w;

    box.style.top=top+"px";
    box.style.left=left+"px";
})
