function getIndexToIns(arr, num) {
    for (let i=0; i++; i<arr.length){
        if (arr[i]<num && arr[i+1]>num){
        console.log(arr[i], arr[i+1])
        }else(console.log("Wrong"))
  // Find my place in this sorted array.
  return num;
    }
}

getIndexToIns([40, 60, 70, 80, 90], 50);