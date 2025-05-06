// Reverse Array✔️✔️
let arr = [2, 3, 5, 7];
let temp = new Array(arr.length);
let i = 0;
for (let j = arr.length - 1; j >= 0; j--) {
  temp[i] = arr[j];
  i++;
}

console.log(temp);