function destroyer([arr],num) {
  for(let i=0; i<6; i++){
      if (num=arr[i]){
         arr=arr.shift(i) 
      }
        
  }
  console.log(arr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);