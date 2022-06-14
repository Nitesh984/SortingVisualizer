async function insertionSort()
{
  let ele =document.querySelectorAll(".bar");
  let body =document.getElementById('bars');
  let name =document.createElement('h6');
  let div = document.createElement('div');
  let text =document.createElement('h5');
  text.style.textAlign="center";
  name.classList.add('name');
  div.classList.add('square_box');
  name.style.display="block";
  name.innerHTML ="key";
  name.style.margin="auto";
  body.appendChild(div).appendChild(name).appendChild(text);
  for(let i=1;i<ele.length;i++)
  {
    let j=i-1;
    let key=ele[i].style.height;
    text.innerHTML =parseInt(ele[i].style.height);
    ele[i].style.backgorund ="blue";
    while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key)))
    {
      await waitforme(delay);
      ele[j].style.background = 'green';
      ele[j+1].style.height = ele[j].style.height;
      if(width.value>10)
      {
      swapText(ele[j+1],ele[j]);
      }
      j--; 
      
    }
  
    ele[j+1].style.height=key;
    
  }
  
  
}
function popshow3()
{
popup.classList.add('show');
let h1 =document.createElement('h3');
let hr =document.createElement('hr');
let p = document.createElement('p');
let button =document.createElement('button');

popup.appendChild(h1);
popup.appendChild(hr)
popup.appendChild(p);
popup.appendChild(button);
button.id ="cross";
h1.innerHTML ="Insertion Sort";
h1.style.color="black";
p.innerHTML ="• Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The eleay is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.<br>Algorithm <br> • To sort an eleay of size n in ascending order: <br>1: Iterate from ele[1] to ele[n] over the eleay. <br>2: Compare the current element (key) to its predecessor. <br>3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element."
button.innerHTML ="Start"
let cross =document.getElementById('cross');
cross.addEventListener('click',async () => {
  popup.classList.remove('show');
  while(popup.hasChildNodes())
  {
    popup.removeChild(popup.firstChild);
  }
  await waitforme(1000);

$.when(insertionSort()).then(function(){
  ITimecomplexity();

   // Enabling the button
   sortbtn.style.pointerEvents="";
   selectionbutton.style.pointerEvents="";
   insertionbtn.style.pointerEvents="";
   Mergebtn.style.pointerEvents="";
   quicksortBtn.style.pointerEvents="";
   
})
})

};

function ITimecomplexity()
{
   let div = document.getElementById('bars');
   let h4 = document.createElement('h4');
   h4.id="text";
   h4.innerHTML = '• Efficient for small data sets. <br> • Best case time complexity - O(n). <br> • The ability to sort a list as it is being received. <br> • The relative order of items with equal keys does not change.' ;
   div.appendChild(h4);

   setTimeout(() => {
    $("#text").fadeOut(4000);
}, 1000);
}

let insertionbtn =document.getElementById('insertion');
insertionbtn.addEventListener('click' ,() => {
  // disabling the button

sortbtn.style.pointerEvents="none";
selectionbutton.style.pointerEvents="none";
insertionbtn.style.pointerEvents="none";
Mergebtn.style.pointerEvents="none";
quicksortBtn.style.pointerEvents="none";

  popshow3();
  
})