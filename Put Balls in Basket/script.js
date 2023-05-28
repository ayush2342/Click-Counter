

let clickButton = document.getElementById("addButton");
 let outerDiv = $('.BallsOuterContainer');
var colorArray = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

let ballCount=0;



function addBalls()
{
    let innerDiv = $('.BallsInnerContainer');

    const node = document.createElement('div');
    node.classList.add('balls');
    node.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    ballCount++;

    if(ballCount>=13)
    {
        ballCount=1;
       let newInnerDiv = `<div class="BallsInnerContainer"></div>`;
       outerDiv.prepend(newInnerDiv);

    }
    
    innerDiv[0].appendChild(node)
    

    // let newBall = `<div class="balls" style="background-color: ${colorArray[Math.floor(Math.random() * colorArray.length)]}"></div>`;
    // innerDiv.append(newBall);

}




clickButton.addEventListener('click',addBalls);