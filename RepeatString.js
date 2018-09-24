function repeatStringNumTimes(str, num) {
var i=0; 
var totalstr="";
  for (i=0; i<num; i++){
    totalstr+=str
  }
console.log(totalstr);
}

repeatStringNumTimes("abc", 3);