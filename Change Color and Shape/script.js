"use scrict";

var countColor=0;
var countShape=0;
var colors=["green","red","#8A2BE2"];
var shapes=["square","triangle","circle"];
var currShape="square";

function ColorChange()
{
	countColor++;
	var elem=document.getElementById("outer-box");
	if(countColor==3)
	{
		countColor=0;
	}
	    elem.style.backgroundColor=colors[countColor];
	
}
	


function ShapeChange()
{
	countShape++;
    var elem=document.getElementById(currShape);
    if(countShape==3)
	{
		countShape=0;
	}

	    elem.setAttribute("id",shapes[countShape]);
        currShape=shapes[countShape];

}

var changeColor=document.getElementById("Color");
changeColor.addEventListener("click",ColorChange);


var changeShape=document.getElementById("Shape");
changeShape.addEventListener("click",ShapeChange);