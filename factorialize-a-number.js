fufunction factorialize(num) {
  var fact=1;
  for (let i=1; i<=num; i++){
    fact=i*fact
  }
  console.log(fact)
  return fact;
}

factorialize(5);
factorialize(10);