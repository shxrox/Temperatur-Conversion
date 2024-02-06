
const textBox = document.getElementById("textBox");
const toFarenit = document.getElementById("toFarenit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;


function convert() {
  if (toFarenit.checked) {
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1)+ "°F";



  } else if (tocelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp -32 ) * (5/9);
    result.textContent = temp.toFixed(1)+ "°C";

  } else {
    result.textContent = "Select a Unit";
  }
}