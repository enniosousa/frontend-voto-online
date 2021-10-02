document.querySelectorAll('button.numpad-key').forEach(numpadKeyButton => {
  numpadKeyButton.onclick = function(){
    pressNumPadNumber(this.value);
  }
})

document.addEventListener ('keypress', (event) => {
  const numbers = ['0', '1', '2','3','4','5','6','7','8','9'];
  const number = String(event.key);

  if(numbers.includes(number)){
    pressNumPadNumber(number);
  }
  else if(event.key === 'Enter'){
    console.log("Precionou Enter")
  }
  console.log(event)

});

function pressNumPadNumber(number){
  document.querySelector('#code').value += String(number)
}