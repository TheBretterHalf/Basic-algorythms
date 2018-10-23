function reverseString(str) {
  var splitstring=str.split("");
  var reversestring=splitstring.reverse("");
  var joinstring=reversestring.join("");
  console.log(joinstring);
}
reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");