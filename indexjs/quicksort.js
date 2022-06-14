async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            if(width.value>10)
            {
                swapText(ele[i],ele[j]);
            }
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    if(width.value>10)
    {
        swapText(ele[i],ele[r]);
    }
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}
function QTimecomplexity()
{
   let div = document.getElementById('bars');
   let h4 = document.createElement('h4');
   h4.id="text";
   h4.innerHTML = 'FAST!!!<br>• Average Time complexity O(n*logn) <br>• Work Well For Small Array <br>• Efficient Algorithm!!' ;
   div.appendChild(h4);

   setTimeout(() => {
    $("#text").fadeOut(4000);
}, 3000);
}
let quicksortBtn = document.getElementById('Quicksort');

quicksortBtn.addEventListener('click',() => {

  console.log('Quick Sort btn clicked');

  // disabling the button

sortbtn.style.pointerEvents="none";
selectionbutton.style.pointerEvents="none";
insertionbtn.style.pointerEvents="none";
Mergebtn.style.pointerEvents="none";
quicksortBtn.style.pointerEvents="none";

  quickpopshow();

})


function quickpopshow()
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
h1.innerHTML ="Quick sort";
h1.style.color="black";
p.innerHTML =" QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.<br> • Always pick first element as pivot. <br>• Always pick last element as pivot (implemented below)Pick a random element as pivot.<br>• Pick median as pivot.<br> •The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time."
button.innerHTML ="Start"
let cross =document.getElementById('cross');
cross.addEventListener('click',async () => {
  popup.classList.remove('show');
  while(popup.hasChildNodes())
  {
    popup.removeChild(popup.firstChild);
  }
  await waitforme(2000);
  let ele = document.querySelectorAll('.bar');
  let l = 0;
  let r = ele.length - 1;
  
$.when(quickSort(ele,l,r)).then(function(){
    QTimecomplexity();

    // Enabling the button
    sortbtn.style.pointerEvents="";
    selectionbutton.style.pointerEvents="";
    insertionbtn.style.pointerEvents="";
    Mergebtn.style.pointerEvents="";
    quicksortBtn.style.pointerEvents="";

  })

})

}