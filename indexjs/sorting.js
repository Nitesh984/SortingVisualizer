function swapText(ele1, ele2)
{
     ele2.childNodes[0].innerHTML=parseInt(ele1.style.height);
     ele1.childNodes[0].innerHTML=parseInt(ele2.style.height);
}
function swap(element1,element2)
{
    console.log('In Swap function');
    let temp =element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}
let width =document.getElementById('ArrayWidth');
let speed =document.getElementById('speed');
let delay=10;
speed.addEventListener('click',() => {
  console.log(speed.value);
  delay=1000-parseInt(speed.value); // so in range we get 900 then the speed will decrease on decrease range and vice versa
})



let size =document.getElementById('size'); // grabbing the size increasing input.
let n=13;

function Range(min ,max) // for creating the random number
{
    return (max-min)+min;
}
for(let i=0;i<size.value;i++) // this to create the Array element when site is just open
{
  let div = document.createElement('div');
  let NewTag =document.createElement('h4');
  div.className ='bar';
  NewTag.className='NewTag';
  const value =Math.floor(Math.random()*(Range(3,100)));
  document.getElementById('bars').appendChild(div).appendChild(NewTag);
  document.querySelectorAll('.bar')[i].style.width =width.value+"px";
  NewTag.innerHTML=value;
  NewTag.style.fontSize=10+"px";
  NewTag.style.color="black";
  document.getElementById('bars').appendChild(div).style.height=value+"%";
}

function DeleteNode()
{
  let parent=  document.getElementById('bars');
  while(parent.hasChildNodes()) // this will see if the parent div has child if yes then deletfirst till haschildNode bool function not return false.
  {
      parent.removeChild(parent.firstChild);
  }
}

function CreateArray(n=size.value)
{
  DeleteNode(); // delete the node.
  for(let i=0;i<n;i++)
{
  let div = document.createElement('div');
  let NewTag =document.createElement('h4'); // creating new tag
  div.className ='bar'; // giving name to it.
  NewTag.className='NewTag';
  const value =(Math.floor(Math.random()*(Range(3,100))));
  document.getElementById('bars').appendChild(div).appendChild(NewTag); // appending to child (div and h4) an the same time
  NewTag.style.fontSize=10+"px";
  document.getElementById('bars').appendChild(div).style.height=value+"%";
  if(width.value<10)
  {
     document.querySelectorAll('.bar')[i].style.width =width.value+"px";
  }
  else
  {
    NewTag.innerHTML=value;
    NewTag.style.color="black";
    
    document.querySelectorAll('.bar')[i].style.width = width.value+"px";
  }
  
}
}


 
let blocks =document.querySelectorAll('.bar');
width.addEventListener('click', () => {
  console.log('width');
  for(let i=0;i<blocks.length;i++)
  {
    console.log('inside loop of width btn');
    console.log( blocks[i].style.width);
    console.log(width.value);
    blocks[i].style.width = width.value+"px";
  }
})

size.addEventListener('click',() => {
   if(width.value<5)
   {
     size.max=80;
     
    n=parseInt(size.value);
    CreateArray(n);
   }
   else if(width.value>5 && width.value<10)
   {
    size.max=60;
     
    n=parseInt(size.value);
    CreateArray(n);
   }
   else if(width.value>10 && width.value<25)
   {
     size.max=40;
     n=parseInt(size.value);
     CreateArray(n);
   }
   else if(width.value>25)
   {
     size.max=25;
     n=parseInt(size.value);
     CreateArray(n);
   }
})


