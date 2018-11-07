'use stric'
function checkPalindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  if (reverseStr === lowRegStr){
  	return true
  }
}
console.log(checkPalindrome("engage le jeu que je le gagne"));
console.log(checkPalindrome('kayak'));