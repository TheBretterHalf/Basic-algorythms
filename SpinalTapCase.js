function spinalCase(str) {
    let newstr = str.split('');
    for (let i=0; i<str.length; i++){
        if (newstr[i]==' '){
            newstr[i]='-'
        } else if (newstr[i].toUpperCase()==newstr[i]){
            newstr = newstr.push('-')
        } else {
            
        }
    }
    let finalstr = newstr.join('').toLowerCase();
    console.log(finalstr);
  return str;
}

spinalCase('This Is Spinal Tap');