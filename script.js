const myInput = document.getElementById("myInput");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const submit = document.getElementById("submit");
let temp; 
function convert () {
  if (toF.checked){
    temp = Number(myInput.value); 
    temp = temp*9/5+32;
    result.textContent = temp + "°F"; 
  }
  else if(toC.checked) {
    temp = Number(myInput.value);
    temp = (temp-32)* 5/9; 
    result.textContent = temp + "°C";
  }
  else {
    result.textContent = "First you select something duffer"; 
  }
