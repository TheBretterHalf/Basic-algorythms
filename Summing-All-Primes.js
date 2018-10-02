var primestring=0;
//define Primestring
function sumPrimes(num) {
    for (let i=0; i<=num; i++){
        //set i as a ticker
            for (let j=0; j<=num; j++)
            //set j as a ticker
                if (j%i!==0 && j/i===1){
                        primestring+=j;
                    } else {
                }
            }
  console.log(primestring);
}

sumPrimes(10);