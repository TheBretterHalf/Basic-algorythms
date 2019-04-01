
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var letters = alphabet.split('')
  var i=0
  for (i=0; i++; i<letters.length) {
      if (letters[i]==str[0]){
          
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