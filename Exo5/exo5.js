var el = document.querySelector('#test');

el.addEventListener('click', function() {
var firstName = document.querySelector("input[name='firstName']");
var lastName = document.querySelector("input[name='lastName']");
var email = document.querySelector("input[name='email']");
var passWord = document.querySelector("input[name='passWord']");
var regName = /^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/g;
var regEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
var regPassWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

if (regName.test(firstName.value) && firstName.value != ''){
  
  firstName.style.backgroundColor = 'green';
}else{
  firstName.value='';
  firstName.style.backgroundColor = 'red';
}
if (alert(regName.test(lastName.value)) && lastName.value != ''){
  lastName.style.backgroundColor = 'green';
}else{
  lastName.value='';
  lastName.style.backgroundColor = 'red';
}
if (regEmail.test(email.value) && email.value != ''){
  email.style.backgroundColor = 'green';
}else{
  email.value='';
  email.style.backgroundColor = 'red';
}
if (regPassWord.test(passWord.value) && passWord.value != ''){
  passWord.style.backgroundColor = 'green';
}else{
  passWord.value='';
  passWord.style.backgroundColor = 'red';
}
});