var primestring=0;
function sumPrimes(num) {
    for (let i=0; i<num; i++){
        primestring+=i;
        if (i === 2) {
            } else if (i % 2 === 0) {
                primestring-=i;
        if (i===3) {
            } else if (i % 3 ===0) {
                primestring-=i;
            }
        if (i===5) {
            } else if (i % 5 ===0) {
                primestring-=i;
            }
        if (i===7) {
            } else if (i % 7 ===0) {
                primestring-=i;
            }
        if (i===9) {
            } else if (i % 9 ===0) {
                primestring-=i;
            }
        if (i===11) {
            } else if (i % 11 ===0) {
                primestring-=i;
            }
        }
    }
  console.log(primestring);
}

sumPrimes(900);