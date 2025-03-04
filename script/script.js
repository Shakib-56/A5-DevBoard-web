
for(let i=1;i<=6;i++){
  document.getElementById(`card-btn-${i}`).addEventListener('click',function(){
    const disabledBtn=btnDisabled(`card-btn-${i}`);
    const title=showingTitleWithCurrentDate(`title-${i}`);
    alert('board updated sucessfully');
    
    const time=localTime();
    const incrementTask=increment('updated-task');
    const decrementTask=decrement('assigned-task');
    const container=document.getElementById('history-text-container');
  const p=document.createElement('p');
  p.innerText=title;
  p.classList.add('bg-gray-200','rounded-lg','mx-2','p-2','my-2');
  container.appendChild(p);
  if(i===6){
    alert(`Congrates!!! You have completed all the current task`)
  }
  })

}

// clear history
document.getElementById('history-btn').addEventListener('click',function(){
  const container=document.getElementById('history-text-container');
  container.innerHTML=" ";

})
// theme change
document.getElementById('theme-btn').addEventListener('click',function(event){
  event.preventDefault();
  colorModeChange('html');
})

document.getElementById('discover-section').addEventListener('click',function(){
  window.location.href='main.html';
})
