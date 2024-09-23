const submit = document.getElementById("check-btn")
const text= document.getElementById("text-input")
const result = document.getElementById("result")
text.onclick = function clear() {
  result.innerHTML ="";
}
let input = text.value;
function palindrome(str){
  let normal = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversed = [...normal].reverse().join('');
  return normal == reversed
}
submit.addEventListener("click", check);
function check() {
  if (text.value === ""){
    alert("Please input a value")
    result.innerHTML = "Please input a value";
    return
  } else if (text.value.replace(/[^A-Za-z0-9]/g, '').length === 1){
    result.innerHTML = `${text.value} is a palindrome`
    return
  } else if(palindrome(text.value)){
    result.innerHTML = `${text.value} is a palindrome`
    console.log(palindrome(text.value))
    return
  } else {
    result.innerHTML = `${text.value} is not a palindrome`
  }
}
