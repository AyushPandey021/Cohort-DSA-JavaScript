//  all 0 in left and all 1 in right side move ✔️✔️
let arr = [1, 1, 0, 1, 0, 1, 0, 0, 1, 0];
let i = 0,
  j = 0;
while (i < arr.length) { 
   if (0 == arr[i]) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);