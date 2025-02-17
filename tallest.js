function tallestNumber(heights) {
  let number = heights[0];
  for (let i of heights) {
    if (i > number) {
      number = i;
    }
  }
  return number;
}
const heights = [65, 66, 68, 72, 78, 60, 65, 66];
const result = tallestNumber(heights);
console.log(result);
