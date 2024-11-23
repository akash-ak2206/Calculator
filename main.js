let outputscreen = document.getElementById('output-screen');
let resultCalculated = false;
function display(num) {
  if (resultCalculated) {
    outputscreen.value = ''; 
    resultCalculated = false; 
  }
  outputscreen.value += num;
}
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
    resultCalculated = true; 
  } catch (err) {
    alert("Invalid");
  }
}
function clr() {
  outputscreen.value = '';
  resultCalculated = false; 
}
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}