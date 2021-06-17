function bubbleSort(arr) {
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      count++;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log({ count });
  console.log(arr);
}

function bubbleSortUdemy(arr) {
  let count = 0;
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      count++;
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log({ count });
  console.log(arr);
}

function bubbleSortUdemyWithSwaps(arr) {
  let count = 0;
  for (var i = arr.length; i > 0; i--) {
    let noSwapped = true;
    for (var j = 0; j < i - 1; j++) {
      count++;
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwapped = false;
      }
    }
    if (noSwapped) break;
  }
  console.log({ count });
  console.log(arr);
}

bubbleSort([2, 6, 12, 3, 5]);
console.log("====================");
bubbleSortUdemy([4, 2, 7, 8]);
console.log("====================");
bubbleSortUdemyWithSwaps([4, 2, 7, 8]);
