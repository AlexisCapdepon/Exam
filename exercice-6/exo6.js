'use strict'
function checkPhoneNumber(phone){
  var regPhone =/^(0)(6|7|1)\d{8}$/gm
  if(regPhone.test(phone) && !isNaN(phone) ){
      return true;
  }
}
console.log('0777168953 : '+checkPhoneNumber('0777168953'));
console.log('0677168953 : '+checkPhoneNumber('0677168953'));
console.log('0177168953 : '+checkPhoneNumber('0177168953'));
console.log('0477168953 : '+checkPhoneNumber('0477168953'));



