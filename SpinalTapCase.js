function spinalCase(str) {
    let newstr = str.split('');
    for (let i=0; i<str.length; i++){
        if (newstr[i]==' '){
            newstr[i]='-'
        }
    }
    let finalstr = newstr.join('')
    console.log(finalstr)
  return str;
}

spinalCase('This Is Spinal Tap');