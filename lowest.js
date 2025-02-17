function lowest(numbers) {
  let min = numbers[0];
  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const numbers = [65, 66, 68, 72, 78, 60, 65, 66];
const result = lowest(numbers);
console.log(result);
