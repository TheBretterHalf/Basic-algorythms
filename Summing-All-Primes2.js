function isprime(num){
    for (let i=2; i<num; i++){
        if (num % i == 0){
            return false
        }
        else{
            console.log("true" + " " + i);
        }
    }

}
isprime(12);