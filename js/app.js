//Declaración de variable
var operandoX;
var operandoY;
var operacion;
var verifica0=0;
var respuesta=0;
var signo=1;

function inicializar(){
  //variables
  var display = document.getElementById('display');
  var on = document.getElementById('on');
  var mas = document.getElementById('mas');
  var menos = document.getElementById('menos');
  var por = document.getElementById('por');
  var dividido = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var punto = document.getElementById('punto');
  var sign = document.getElementById('sign');
}

//Eventos de click
  uno.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "1";
  }
  dos.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "2";
  }
  tres.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "3";
  }
  cuatro.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "4";
  }
  cinco.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "5";
  }
  seis.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "6";
  }
  siete.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "7";
  }
  ocho.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "8";
  }
  nueve.onclick = function(e){
      limpiarcero();
      display.textContent = display.textContent  + "9";

  }
  punto.onclick = function(e){
      if (display.textContent.indexOf('.')!= -1){
        display.textContent = display.textContent;
      }
      else
      display.textContent = display.textContent  + ".";
  }
  sign.onclick = function(e){
      display.textContent = display.textContent+"s";
      signo= -1;
  }
  cero.onclick = function(e){
      if (display.textContent== "0"){
          display.textContent== display.textContent;
      }
      else
      display.textContent = display.textContent  + "0";
  }
  on.onclick = function(e){
      resetear();
      display.textContent = display.textContent  + "0";
      verifica0=0;
  }
  mas.onclick = function(e){
      operandoX = display.textContent;
      operacion = "+";
      limpiar();

  }
  menos.onclick = function(e){
      operandoX = display.textContent;
      operacion = "-";
      limpiar();
  }
  por.onclick = function(e){
      operandoX = display.textContent;
      operacion = "*";
      limpiar();
  }
  dividido.onclick = function(e){
      operandoX = display.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
     if (respuesta='0') {
      operandoY = display.textContent;
      resolver();
     }
     else
     operandoX = display.textContent;
     resolver();
  }
  function limpiar(){
    display.textContent = "";
  }
  function resetear(){
    display.textContent = "";
    operandoX = 0;
    operandoY = 0;
    operacion = "";
  }

  function limpiarcero(){
  verifica0=verifica0 + 1;
    if (verifica0==1) {
      display.textContent = "";}
    else if (verifica0>=8) {
         verifica0=0;

     }

    }

  function resolver(){

  switch(operacion){
    case "+":
      respuesta = parseFloat(operandoX) + parseFloat(operandoY);
        break;
    case "-":
        respuesta = parseFloat(operandoX) - parseFloat(operandoY);
        break;
    case "*":
      respuesta = parseFloat(operandoX) * parseFloat(operandoY);
      break;
    case "/":
      respuesta = parseFloat(operandoX) / parseFloat(operandoY);
      break;
  }
  display.textContent = respuesta;
}
// Evento de presskey

function manejador(elEvento) {
  var evento = elEvento || window.event;
  console.log("["+evento.type+"] El código de la tecla pulsada es " + evento.keyCode);
}
document.onkeyup = manejador;
document.onkeydown = manejador;

uno.onkeydown= function(e){
  document.getElementById("uno").src = '1press.png';
}
