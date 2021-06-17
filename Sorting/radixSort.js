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

    numbers = [];
    for (let i = 0; i < buckets.length; i++) {
      for (j = 0; j < buckets[i].length; j++) {
        numbers.push(buckets[i][j]);
      }
    }
  }
  return numbers;
}

let input = [423, 212, 534, 21, 6, 7, 100, 1243, 1244];
console.log(radixSort(input));
