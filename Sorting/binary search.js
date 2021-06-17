function binarySearch(arr, value) {
  let s = 0,
    e = arr.length - 1;
  while (s < e) {
    let middle = Math.floor((e + s) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      s = middle;
    } else {
      e = middle;
    }
  }
  return -1;
}

/*
1 2 3 4 5 find 2
1 2 3   3>2 move left
2 2===2 return index
*/

let array = [
  1, 2, 3, 4, 5, 6, 7, 25, 57, 86, 100, 103, 104, 323, 811, 2130, 2313,
];
let index = binarySearch(array, 100);
console.log(index, array[index]);
