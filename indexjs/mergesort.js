async function Merge(ele,low,mid,high)
{
  console.log('Inside the Merge Function');
  
  let n1 =mid-low+1;
  console.log(high);
  console.log(mid);
  let n2 =parseInt(high-mid);

  let left = new Array(n1);
  let right = new Array(n2);
  
  for(let i=0;i<n1;i++)
  {
      console.log('Inside the left array loop');
    //   color on left partition
    ele[low+i].style.background = "orange";
    // filling left array with all the element on the left side.
    left[i]=ele[low+i].style.height;
  }

  for(let i=0;i<n2;i++)
  {
      console.log('Inside the right array loop');
    //   color on right partition
    ele[mid+1+i].style.background = "yellow";
    // filling right array with all element on right side.
    right[i]=ele[mid+1+i].style.height;
  }
//   now comparing and sorting the array of left and right.....
let i=0, j=0, k=low;
while(i<n1 && j<n2)
{
    console.log("inside the while loop");
    if(parseInt(left[i])<=parseInt(right[j]))
    {
        console.log('inside the if statement of while loop');
        if((n1+n2)===ele.length)
        {
            ele[k].style.background = 'green';
        }
        else
        {
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        if(width.value>10)
        {
            ele[k].childNodes[0].innerHTML=parseInt(left[i]);
        }
        i++;
        k++;
    }
    else
    {
        console.log('inside the else statement of while loop');
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        } 
        ele[k].style.height = right[j];
        if(width.value>10)
        {
            ele[k].childNodes[0].innerHTML=parseInt(right[j]);
        }
        j++;
        k++;
       
    }
    
}

while(i < n1){
    await waitforme(delay);
    console.log("In while if n1 is left");
    // color
    if((n1 + n2) === ele.length){
        ele[k].style.background = 'green';
    }
    else{
        ele[k].style.background = 'lightgreen';
    }
    ele[k].style.height = left[i];
    if(width.value>10)
    {
        ele[k].childNodes[0].innerHTML=parseInt(left[i]);
    }
   
    i++;
    k++;
}
while(j < n2){
    await waitforme(delay);
    console.log("In while if n2 is left");
    // color
    if((n1 + n2) === ele.length){
        ele[k].style.background = 'green';
    }
    else{
        ele[k].style.background = 'lightgreen';
    }
    ele[k].style.height = right[j];

    if(width.value>10)
    {
        ele[k].childNodes[0].innerHTML=parseInt(right[j]);
    }
    j++;
    k++;
}

}

async function MergeSort(ele,low,high){
    console.log("Inside MergeSort Function");
    if(low>=high)
    {
        return ;
    }
    const mid = low+ Math.floor((high-low)/2);
    await MergeSort(ele,low,mid);
    await MergeSort(ele,mid+1,high);
    await Merge(ele,low,mid,high);
}

function MTimecomplexity()
{
   let div = document.getElementById('bars');
   let h4 = document.createElement('h4');
   h4.id="text";
   h4.innerHTML = 'FAST!!!<br>• Average Time complexity  O(n*Log n) <br>• Work Well For Large Size Array <br>• Efficient Alogrithm!!!' ;
   div.appendChild(h4);

   setTimeout(() => {
    $("#text").fadeOut(4000);
}, 5000);
}

let Mergebtn = document.getElementById('MergeSort');
 
Mergebtn.addEventListener('click',() => {
// disabling the button

sortbtn.style.pointerEvents="none";
selectionbutton.style.pointerEvents="none";
insertionbtn.style.pointerEvents="none";
Mergebtn.style.pointerEvents="none";
quicksortBtn.style.pointerEvents="none";

    mergepopshow()
 

});

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function mergepopshow()
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
h1.innerHTML ="Merge sort";
h1.style.color="black";
p.innerHTML ="• Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then it merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. <br> <br>• Time Complexity: O(n logn),  Sorting arrays on different machines. Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. T(n) = 2T(n/2) + θ(n)"
button.innerHTML ="Start"
let cross =document.getElementById('cross');
cross.addEventListener('click',async () => {
  popup.classList.remove('show');
  while(popup.hasChildNodes())
  {
    popup.removeChild(popup.firstChild);
  }
  await waitforme(2000);
  console.log('Merge btn clicked');
  let ele = document.querySelectorAll('.bar');
  let low=0;
  let high = parseInt(ele.length)-1;
//   calling Merge function to do the sorting.....


$.when(MergeSort(ele,low,high)).then(function(){
    MTimecomplexity();

    // Enabling the button
    sortbtn.style.pointerEvents="";
    selectionbutton.style.pointerEvents="";
    insertionbtn.style.pointerEvents="";
    Mergebtn.style.pointerEvents="";
    quicksortBtn.style.pointerEvents="";
    
  })

})

}