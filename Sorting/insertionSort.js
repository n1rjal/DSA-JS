/*

Start by picking the second element in the array 
Now compare the second element 



*/

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(arr);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
}

insertionSort([2, 7, 4, 5, 1]);
