
function fearNotLetter(string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var letters = alphabet.split('')
  var str = string.split('')
  for (let i=0; i++; i<letters.length) {
      if (letters[i]==str[0]){
          for (let j=0; j++; j<str.length){
              if (letters[i+j]==str[j]){
                  
              } else {
                  console.log(letters[i+j])
              }
          }
      } else {
          alert ("Try Again")
      }
  }
}

fearNotLetter("abce");

//pseudo
//-get alphabet into single letters
//-run through alphabet, starting with first letter of str
//-if else statement running the error
//log missing letter to console