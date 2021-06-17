/*

Make a varibale to stor the minimum value

Loop and update the value of minimum value
Stor the index
Swap the minimum value with the starting value of first loop


*/

function swap(arr, i, j) {
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function selectionSort(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < numbers.length; j++) {
      count++;
      if (numbers[minimum] > numbers[j]) {
        minimum = j;
      }
    }

    if (minimum !== i) {
      swap(numbers, i, minimum);
    }
  }
  console.log(count);
  console.log(numbers);
}

function selectionSortTeacher(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < numbers.length; j++) {
      count++;
      if (numbers[minimum] > numbers[j]) {
        minimum = j;
      }
    }

    if (minimum !== i) {
      swap(minimum, i);
    }
  }

  console.log(numbers);
}

selectionSort([0, 3, 2, 1]);
selectionSortTeacher([0, 3, 2, 1]);
