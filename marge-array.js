  // marge 2 diffrent array in asending way✔️
  let arr1 = [2, 4, 6];
  let arr2 = [1, 5, 3, 8];
  let marge = new Array(arr1.length + arr2.length);
  let i = (j = k = 0);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      marge[k++] = arr1[i++];
    } else {
      marge[k++] = arr2[j++];
    }
  }
  while (j < arr2.length) {
    marge[k++] = arr2[j++];
  }
  while (j < arr1.length) {
    marge[k++] = arr1[i++];
  }
  console.log(marge);