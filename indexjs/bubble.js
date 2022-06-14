async function bubbleSort() {
  console.log('In bubbe()');
  const ele = document.querySelectorAll(".bar");
  for(let i = 0; i < ele.length-1; i++){
      console.log('In ith loop');
      for(let j = 0; j < ele.length-i-1; j++){
          console.log('In jth loop');
          ele[j].style.background = 'blue';
          ele[j+1].style.background = 'blue';
          if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
              console.log('In if condition');
              await waitforme(delay);
              if(width.value>10)
              {
                swapText(ele[j],ele[j+1]);
              }
              
              swap(ele[j], ele[j+1]);
          }
          ele[j].style.background = 'cyan';
          ele[j+1].style.background = 'cyan';
      }
      ele[ele.length-1-i].style.background = 'green';
  }
  ele[0].style.background = 'green';
}


let popup = document.querySelector('#popup');
 function popshow()
{
popup.classList.add('show');
let h1 =document.createElement('h3');
let hr =document.createElement('hr');
let p = document.createElement('p');
let button =document.createElement('button');
button.id ="cross";

popup.appendChild(h1);
popup.appendChild(hr)
popup.appendChild(p);

popup.appendChild(button);
h1.innerHTML ="Bubble sort";
h1.style.color="black";
p.innerHTML ="The bubble sort algorithm is a reliable sorting algorithm. This algorithm has a worst-case time complexity of O(n2). The bubble sort has a space complexity of O(1). The number of swaps in bubble sort equals the number of inversion pairs in the given array<br>Due to its simplicity, bubble sort is often used to introduce the concept of a sorting algorithm. <br> In computer graphics, it is popular for its capability to detect a very small error (like a swap of just two elements) in almost-sorted arrays and fix it with just linear complexity (2n). "
button.innerHTML ="Start"
let cross =document.getElementById('cross');
cross.addEventListener('click',async () => {
  popup.classList.remove('show');
  while(popup.hasChildNodes())
  {
    popup.removeChild(popup.firstChild);
  }
  await waitforme(2000);

   $.when(bubbleSort()).then(function(){

    BTimecomplexity();

    // Enabling the button
    sortbtn.style.pointerEvents="";
    selectionbutton.style.pointerEvents="";
    insertionbtn.style.pointerEvents="";
    Mergebtn.style.pointerEvents="";
    quicksortBtn.style.pointerEvents="";

})
})

}


function BTimecomplexity()
{
   let div = document.getElementById('bars');
   let h4 = document.createElement('h4');
   h4.id="text";
   h4.innerHTML = '• Simple sorting Algorithm <br> • Easy To Implement <br> • Auxiliary Space Complexity: O(1)' ;
   div.appendChild(h4);

   setTimeout(() => {
    $("#text").fadeOut(4000);
}, 3000);
}

let sortbtn=document.querySelector('#bubble');
sortbtn.addEventListener('click',() => {
// disabling the button

  sortbtn.style.pointerEvents="none";
  selectionbutton.style.pointerEvents="none";
  insertionbtn.style.pointerEvents="none";
  Mergebtn.style.pointerEvents="none";
  quicksortBtn.style.pointerEvents="none";

  popshow();
})
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
