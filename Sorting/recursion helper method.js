// recursion helper
function collectOddValueWrapper(arr) {
  let result = [];
  function collectOddValue(arr) {
    if (arr.length === 0) return 0;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    collectOddValue(arr.slice(1));
  }
  collectOddValue(arr);
  return result;
}

//pass by ref method;
function collectOddValueWrapperRef(arr, result) {
  if (arr.length === 0) return;
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  collectOddValueWrapperRef(arr.slice(1), result);
}

//pass by ref method;
function collectOddValuePF(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValuePF(arr.slice(1)));
  return newArr;
}

result = [];
console.log(collectOddValueWrapper([1, 2, 3, 4, 5, 6]));
collectOddValueWrapperRef([1, 2, 3, 4, 5, 11, 13], result);
console.log({ result });
console.log(collectOddValuePF([1, 2, 3, 4, 5, 6, 7]));
