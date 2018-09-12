function largestOfFour(arr) {
  // You can do this!
  var bigNum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      var arr = arr.splice(i, 4, j);
        if (arr[i][j]>bigNum){
          bigNum=arr[i][j];
        }
    }
  }
   console.log(bigNum);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
