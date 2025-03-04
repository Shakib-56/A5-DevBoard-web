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


// function formatTime(number) {
//    return number < 10 ? '0' + number : number;
// }
// function localTime(){
//    let now = new Date();
//    let hours = formatTime(now.getHours());
//    let minutes = formatTime(now.getMinutes());
//    let seconds = formatTime(now.getSeconds());
   
//    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
// }

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




