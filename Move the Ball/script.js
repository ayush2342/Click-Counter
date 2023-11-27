"use strict";

var Xaxix=0;
var Yaxix=0;

var ball=document.getElementById("Insideball");
var w = window.innerWidth-ball.offsetWidth;
var h = window.innerHeight-ball.offsetHeight;


document.addEventListener("keypress",function MoveBall(event)
{
    switch(event.key)
    {
        case "w":
        case "W":
            if(Yaxix==0)
            {
                return;
            }
            Yaxix-=50;
            ball.style.transform="translate(" +Xaxix+ "px," + Yaxix +"px)";
            ball.style.transition=" all 1s";
            break;
        case "a":
        case "A":
            if(Xaxix==0)
            {
                return;
            }
            Xaxix-=50;
            ball.style.transform="translate(" +Xaxix+ "px," + Yaxix +"px)";
            ball.style.transition=" all 1s";
            break;
        case "s":
        case "S":
        
            Yaxix+=50;
            console.log(Yaxix+" "+h)
            if(Yaxix>h)
            {
                Yaxix-=50;
                return;
            }
            ball.style.transform="translate(" +Xaxix+ "px," + Yaxix +"px)";
            ball.style.transition=" all 1s";
            break;
        case "d":
        case "D":
            
            Xaxix+=50;
            console.log(Xaxix+" "+w)
            if(Xaxix>w)
            {
                Xaxix-=50;
                return;
            }
            ball.style.transform="translate(" +Xaxix+ "px," + Yaxix +"px)";
            ball.style.transition=" all 1s";
            break;
    }
   
    
    // var test=50;
    
})
