//const desks=document.querySelectorAll('.desk');
const empties=document.querySelectorAll('.empty');

//desk.addEventListener('dragstart',dragStart);
//desk.addEventListener('dragend',dragEnd);


function dragStart(){
 this.className+=' hold';
 setTimeout(()=>(this.className='invisible'),0);
}
function dragEnd(){
	this.className='desk';
}
for(const empty of empties)
{
	empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}
function dragOver(e){
 e.preventDefault();
}
function dragEnter(e){
	e.preventDefault();
	this.className+=' hovered';
}
function dragLeave(){
	this.className='empty';
}
function dragDrop(e){
	this.className='empty';
	let desk=e.dataTransfer.getData('text');
	if(this.hasChildNodes()) {
		console.log('oops');
	}
	else{
		this.append(document.getElementById(desk));
	}
}
function  Dragging(e){
    this.addEventListener('dragstart',dragStart);
    this.addEventListener('dragend',dragEnd);
    console.log('taken');
    e.dataTransfer.setData('text', e.target.id);
    todrop=this;
}
popup=document.querySelector('.popup');
function SetMark(){
	popup.style.display = 'block';
}
function CloseMark(){
popup.style.display = 'none';
}
window.onclick=function(e){
	if(e.target==popup){
		popup.style.display = 'none';
	}
	
}
mark=document.querySelectorAll('.mark');
for(var ma of mark)
{
	ma.onclick=function(){
		popup.style.display = 'none';

	}
}