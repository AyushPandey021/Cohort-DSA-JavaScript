//  find the max value in array ✔️
let arr = [12, 3, 5, 6, 72, 34, 4, 5, 36, 4, 77, 8];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
