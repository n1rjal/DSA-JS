function swap(arr, i, j) {
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function pivot(arr, start, end) {
  let pivot_index = Math.floor((start + end) / 2);
  let pivot_value = arr[pivot_index];

  while (start < end) {
    for (; arr[start] < pivot_value; start++) {}
    for (; arr[end] > pivot_value; end--) {}
    if (start < end) {
      swap(arr, start, end);
    }
  }
  swap(arr, start, end);
  return end;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let pi = pivot(arr, start, end);
    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
}

let input = [2, 3, 1, 5, -10, -7, -100, 4, 9, 13, -12, -200, 200, -500, 500];
quickSort(input, 0, input.length - 1);
console.log(input);
