
let clickButton = document.getElementById('submit');
let dataDiv = $('#data-div>ul');

function uploadDetails()
{
   let rollNo= document.getElementById('rollno');
   let name= document.getElementById('name')
   let marks= document.getElementById('marks')

   if(rollNo&&name&&marks)
   {
    let newDetails = `<li>
    <p>Roll No - <span>${rollNo.value}</span> ,<span>${name.value}</span>  has scored <span>${marks.value}</span>  marks</p>
    </li>`

    dataDiv.append(newDetails);
 
    rollNo.value='';
    name.value='';
    marks.value='';
    
    return;
    

   }
   else
   {
    window.alert("Please fill all the Fields")
   }
}
clickButton.addEventListener('click',uploadDetails);