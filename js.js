function divi() {
  var numero = document.getElementById("cj").value;
  var numero2 = document.getElementById("cj1").value;
  if (numero % numero2) {
    document.getElementById("rta").innerHTML = "no es divisible";
  } else {
    document.getElementById("rta").innerHTML = "es divisible";
  }
}





function porc() {
  var numero = document.getElementById("cj2").value;
  var numero2 = document.getElementById("cj3").value;
  pM = (numero2 * 100) /numero ;
  document.getElementById("rta").innerHTML =
    "el porcentaje de mujeres es " + pM + "%";
}
function pos() {
  var n = document.getElementById("cj4").value;
    if (n > 0) {
      document.getElementById("rta").innerHTML = "es positivo";
    } else{
        document.getElementById("rta").innerHTML = "es negativo";
    }
}
function menorM() {
    for (i=10; i >= 1 ; i--) { 
       document.getElementById("rta").innerHTML+=i+"<br>";
    }
}
function edades() {
    var sM=0;
    var sm=0;
    var edad;
    for (i=1; i <= 5 ; i++) { 
    edad = parseInt(prompt("ingrese su edad numero" + i));
    if (edad>=18) {
        sM++;
    }else{
        sm++;
    }
    }
    pM=sM*10;
    pm=sm*10;
    document.getElementById("rta").innerHTML="los mayores de edad son el "+pM+"% y los menores de edad son el "+pm+"%";
}
function peso() {
    var ptotal=0;
    var peso=0;
    for (i=1; i <=5 ; i++) { 
        peso=parseInt(prompt("ingrese el peso del numero "+i));
        ptotal+=peso/5;
    }
document.getElementById("rta").innerHTML="el peso promedio es "+ptotal+"kl";
}

function while1() {
  var n = parseInt(Math.random()*99);
  var cont = 0;
  var numero = -1;
  while (numero != n) {
      numero = parseInt(prompt("ingresa un numero para empezar a jugar"));
      if (numero < n) {
          alert("el numero debe ser mayor a " + numero);
      }else if (numero > n) {
          alert("el numero debe ser menor a " + numero);
      } else {
          alert("lo adivinaste en " + cont + " intentos" );
      }
      cont ++
  }
}
function while2() {
  var cont = 10;
  while (cont <= 20) {
      document.getElementById("rta").innerHTML += cont + "<br>";
      cont++
  }
}
function validar() {
  var n = document.getElementById("cj8").value;
 while (n<=10) {
  document.getElementById("rta").innerHTML+=n+"<br>";
  n++;
 }
  
}