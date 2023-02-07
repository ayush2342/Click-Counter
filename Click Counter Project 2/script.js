"use strict";

var current=document.querySelector(".current");
var next=document.querySelector(".next");
var clicked=document.getElementById("submitButton");

function startCount()
{
    var destValue=document.getElementById("number").value;
    if(destValue==""||destValue<1||destValue>9)
    {
        window.alert("Please Enter value between 0 and 9");
        return;
    }
    var initialvalue=0;
   
  var Interval=setInterval(function changeNumber()
  { 

    if(initialvalue>=destValue)
    {
        current.innerHTML=0;
        next.innerHTML=0;
        clearInterval(Interval);
        window.alert("Counter has Stopped");
        return;
    }

    initialvalue++
    next.innerHTML=initialvalue;
    next.classList.add("animate");
    

    setTimeout(function removeClass()
    {
        initialvalue++;
        if(initialvalue>destValue)
        {
            return;
        }
        current.innerHTML=initialvalue;
      next.classList.remove("animate");
      
    },500);
  },1000);
}
clicked.addEventListener("click",startCount);