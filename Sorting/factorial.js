let recursion = (number) => {
  if (number === 0 || number === 1) return 1;
  return number * recursion(number - 1);
};

console.log(recursion(5));
