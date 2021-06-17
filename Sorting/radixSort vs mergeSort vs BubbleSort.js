function radixSortWrapper(numbers) {
  function getDigit(number, i) {
    if (number === 0) return 1;
    return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
  }

  function countDigit(number) {
    return Math.floor(Math.log10(Math.abs(number))) + 1;
  }

  function mostDigits(numbers, i) {
    maxDigits = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (maxDigits < countDigit(numbers[i])) {
        maxDigits = countDigit(numbers[i]);
      }
    }
    return maxDigits;
  }

  function radixSort(numbers) {
    let maxDigitsCount = mostDigits(numbers);
    for (let k = 0; k < maxDigitsCount; k++) {
      let buckets = Array.from({ length: 10 }, () => []);

      for (let i = 0; i < numbers.length; i++) {
        let digit = getDigit(numbers[i], k);
        buckets[digit].push(numbers[i]);
      }

      // is this making code slow ???
      numbers = [].concat(...buckets);
    }
    return numbers;
  }
  let t1 = new Date();
  let output = radixSort(numbers);
  let t2 = new Date();
  console.log(t2 - t1);
  return output;
}

function mergeSortWrappper(numbers, start, end) {
  function merge(arr1, arr2) {
    let i = 0,
      j = 0;
    result = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }

  function mergeSort(numbers, start, end) {
    if (end - start > 2) {
      let middle = Math.floor((start + end) / 2);
      let firstHalf = mergeSort(numbers.slice(start, middle));
      let secondHalf = mergeSort(numbers.slice(middle));
      return merge(firstHalf, secondHalf);
    } else {
      return numbers;
    }
  }

  let t1 = new Date();
  let output = mergeSort(numbers, start, end);
  let t2 = new Date();
  console.log(t2 - t1);
  return output;
}

function bubbleSortWrapper(arr) {
  function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  let t1 = new Date();
  let output = bubbleSort(arr);
  let t2 = new Date();
  console.log(t2 - t1);
  return output;
}

let input = [].concat(
  ...Array.from({ length: 1_00_000 }, () => [Math.floor(Math.random() * 1000)])
);

console.log(input);
console.log("MERGE SORT");
mergeSortWrappper(input, 0, input.length - 1);
console.log("RADIX SORT");
radixSortWrapper(input, 0, input.length - 1);
console.log("BUBBLE SORT");
bubbleSortWrapper(input);
