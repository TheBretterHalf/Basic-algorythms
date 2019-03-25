
function fearNotLetter(string) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var letters = alphabet.split('')
  var str = string.split('')
  console.log(letters)
  console.log(str)
  for (let i=0; i++; i<alphabet.length) {
      if (letters[i]==str[i]){
          for (let j=0; j++; j<string.length){
              console.log(str[j])
              if (letters[i+j]==str[j]){
              } else {
                  var result =(letters[i+j])
                  console.log(result)
              }
          }
      } else {
          console.log("Try Again")
      }
  }
}

fearNotLetter("abce");

//pseudo
//-get alphabet into single letters
//-run through alphabet, starting with first letter of str
//-if else statement running the error
//log missing letter to console