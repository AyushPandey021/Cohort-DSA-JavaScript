// find 2nd max value ✔️✔️
let arr = [28,3,4,48,86,66]
let max = Math.max(arr[0],arr[1])
let smax = Math.max(arr[0],arr[1])
for(let i = 1; i<arr.length;i++){
  if(arr[i]> max){
    smax = max ;
    max = arr[i]
  }else if(arr[i]>smax){
smax = arr[i]
  }

}
console.log(smax);