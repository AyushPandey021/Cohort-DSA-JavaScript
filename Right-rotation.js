// Right rotation  by 1 Element✔️

let arr = [1, 2, 3, 4, 5];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);
for (let j = 0; j <= 4; j++) {
  console.log(j + 1 + " excution");

  for (let i = 1; i <= 3; i++) {
    console.log("hello");
  }
}