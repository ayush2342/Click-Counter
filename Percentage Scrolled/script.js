var count=0;
var maxHeight=window.innerHeight;
var percentage=document.getElementById("percentageIndicator");
window.addEventListener("scroll",function()
{
    var screenScrollTop=document.documentElement.scrollTop; //Distance of root element scrolled from top
    var screenScrollHeight=document.documentElement.scrollHeight; //Total scrollabe Height of the document
    var screenHeight=this.window.innerHeight; //Total height of the document
    
    count=Math.floor(((screenScrollTop)/(screenScrollHeight-screenHeight))*100);

    percentage.innerHTML=count+"% Viewed";
})