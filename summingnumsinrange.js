var sum = 0
function sumAll(arr) {
    var narr=arr.sort(function(a, b){return a-b});
    for (var i=narr[0]; i<= narr[1]; i++){
        sum=i+sum

    }
  console.log(sum)
}

sumAll([1, 4]);
