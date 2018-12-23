//summing all primes
function isprime(num){
    for (let i=0; i<num; i++){
        for(let j=1; j<num; j++){
            if(i%j == 0 ){
                console.log(i)
            }else{
                console.log(false,i)
            }
        }
    }
}
isprime(15)