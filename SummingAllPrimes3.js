//summing all primes
function isprime(num){
    for (let i=0; i<num; i++){
        //let i be divided by previous iterations of i using joe's fibb series
        //make sure i cannot be divided by even number to cut down on the callouts
        //find series depection of prime numbers
        for(let j=1; j<i; j++){
            //disp all nums and false for those evenly divisible
            if(i%j == 0){
                //return
            }else{
                console.log(true, i, j)
            }
        }
    }
}
isprime(15)
//adad
//collect all values