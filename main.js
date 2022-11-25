//funções da tela
function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}
function addChar(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else input.value += character;
}
function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}

//operações
function cos(form) {
  form.display.value = Math.cos(form.display.value);
}
function sin(form) {
  form.display.value = Math.sin(form.display.value);
}
function tan(form) {
  form.display.value = Math.tan(form.display.value);
}
function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}
function ln(form) {
  form.display.value = Math.log(form.display.value);
}
function exp(form) {
  form.display.value = Math.exp(form.display.value);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}
function compute(form) {
  form.display.value = eval(form.display.value);
}
function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

//validação
function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%"
      ) {
        alert("Entrada inválida!");
        return false;
      }
    }
  }
  return true;
}
tg = (x, y) =>{
  return(x.target.matches(y))
}
document.addEventListener('DOMContentLoaded', (ev)=>{
  function evalueEqualEquation(x, y, fullEquation) {
    arrayXequation = EvaluateNumber(x.split(""))
    arrayYequation = EvaluateNumber(y.split(""))
    if (arrayYequation.filter((x)=> x === "x")) {
      idx = arrayYequation.findIndex((x)=> x === "x")
      idx += arrayXequation.length
      console.log("es el numero ", idx)
    }else{
      console.log("hay x en x")
    }
    console.log(arrayXequation, arrayYequation, fullEquation)
    console.log(fullEquation.length, arrayXequation.length+arrayYequation.length)

  }
  function EvaluateNumber(Array) {
    let NewAarray = [], Concat = "";
    Array.forEach((e)=>{
      if (e.match(/[0-9]/)) {
        Concat += e
      }else if(!e.match(/[0-9]/)){
        if (Concat !== "") NewAarray.push(Concat)
        NewAarray.push(e)
        Concat = ""
      }else{
        NewAarray.push(Concat)
        Concat = ""
      }
    })
    if (Concat !== "") NewAarray.push(Concat)
    return NewAarray
  }
  function CheckEquation(equation) {
    console.log(equation) 
    if (equation.match('=')) {
      // isso faz uma equação de primeiro nivel
      sidesOfEquation = equation.split("=")
      fullEquation = equation.split("")
      fullEquation = EvaluateNumber(fullEquation)
      evalueEqualEquation(sidesOfEquation[0], sidesOfEquation[1], fullEquation)
    } else {
      // isso faz uma operação comum
    }
  } 
  document.addEventListener('click', (ev)=>{
      if (ev.target.matches('#display'))  CheckEquation(ev.target.value)
    })
})