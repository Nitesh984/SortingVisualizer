async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'white';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'white';
            }   
        }
        await waitforme(delay);
        if(width.value>10)
        {
            swapText(ele[min_index], ele[i]);
        }
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'white';
    }
}

function popshow1()
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
h1.innerHTML ="Selection Sort";
p.innerHTML ="The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array <br>1) The subarray which is already sorted <br> 2) Remaining subarray which is unsorted <br><strong> Time Complexity O(n2) as there are two nested loopsAuxiliary Space O(1) </strong>"
button.innerHTML ="Start"

let cross =document.getElementById('cross');
cross.addEventListener('click',async () => {
  popup.classList.remove('show');
  while(popup.hasChildNodes())
  {
    popup.removeChild(popup.firstChild);
  }
  await waitforme(1000);

   $.when(selection()).then(function(){

    STimecomplexity();

     // Enabling the button
     sortbtn.style.pointerEvents="";
     selectionbutton.style.pointerEvents="";
     insertionbtn.style.pointerEvents="";
     Mergebtn.style.pointerEvents="";
     quicksortBtn.style.pointerEvents="";

})

})

}

function STimecomplexity()
{
   let div = document.getElementById('bars');
   let h4 = document.createElement('h4');
   h4.id="text";
   h4.innerHTML = '• It performs very well on small lists. <br> • It performs very well on small lists. <br> • It does not require a lot of space for sorting. <br> Only one extra space is required for holding<br> the temporal variable.' ;
   div.appendChild(h4);

   setTimeout(() => {
    $("#text").fadeOut(4000);
}, 1000);
}

let selectionbutton =document.querySelector('#Selection');
selectionbutton.addEventListener('click',() => {

    // disabling the button

sortbtn.style.pointerEvents="none";
selectionbutton.style.pointerEvents="none";
insertionbtn.style.pointerEvents="none";
Mergebtn.style.pointerEvents="none";
quicksortBtn.style.pointerEvents="none";

  popshow1();

})

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

