function btnDisabled(id){
   const btn=document.getElementById(id);
   btn.setAttribute('disabled',true);
   btn.classList.add('opacity-40');
}
function showingTitleWithCurrentDate(id){
   const title=document.getElementById(id).innerText;
   const time=localTime();
   return `You have completed the task ${title} at ${time}`;


}

function localTime(){
let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
return currentTime;
}
// increment task

function increment(id){
   const taskNumber=document.getElementById(id).innerText;
   const convertedNumberTask=parseInt(taskNumber);
   const totalTask=convertedNumberTask+1;
   document.getElementById(id).innerText=totalTask;
}
// decrement task
function decrement(id){
   const taskNumber=document.getElementById(id).innerText;
   const convertedNumberTask=parseInt(taskNumber);
   const totalTask=convertedNumberTask-1;
   if(totalTask<0){
      document.getElementById(id).innerText=0;
   }else{
      document.getElementById(id).innerText=totalTask;
   }
   
}


let currentColorIndex = 0;

function colorModeChange(id) {
   let colors = ['orange', 'amber', 'yellow', 'lime', 'green'];
   const body = document.getElementById(id);

   // Remove all existing bg- classes
   body.className = '';  

   // Add the new background color class
   body.classList.add(`bg-${colors[currentColorIndex]}-200`);

   // Move to the next color in the array
   currentColorIndex = (currentColorIndex + 1) % colors.length;
}















