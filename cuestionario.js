var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:") 

var p1 = prompt("¿Cómo se llama al primer día de la Primavera?\nA:Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno"); 

  
if(p1 == "B"){
    var c = c + 1;
}else if(p1 == "A"){
    var i = i + 1;
    else if (p1 == "C")
     i = i + 1;
}else{
    alert("No es una opción valida")
} 

var p2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?nA:6 meses de luz diurna ininterrumpida\nB:6 meses de oscuridad inimterrumpida\nC:  6 meses de alternancia de luz y oscuridad"); 

  
if(p2 == "A"){
    var c = c + 1;
}else if(p2 == "B"){
    var i = i + 1;
    else if (p2 == "C")
     i = i + 1;
}else{
    alert("No es una opción valida")
} 

var p3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?nA:Setiembre\nB:Junio\nC: Marzo"); 

if(p3 == "C"){
    var c = c + 1;
}else if(p3 == "B"){
    var i = i + 1;
    else if (p3 == "A")
     i = i + 1;
}else{
    alert("No es una opción valida")
} 

var p4 = prompt("¿Qué es la Fiesta de la Primavera en China??nA:La Navidad\nB:El Año Nuevo\nC: Fiestas Patrias de China"); 

if(p4 == "B"){
    var c = c + 1;
}else if(p4 == "C"){
    var i = i + 1;
    else if (p4 == "A")
     i = i + 1;
}else{
    alert("No es una opción valida")
} 

if (c > i){
    document.write(nombre + ", has completado exitosamente el test<br>");
    document.write("Correctas"+c):
    socument.write("Incorrectas"+i):
}else if (c > i)
    document.write(nombre + ", has completado exitosamente el test<br>");
    document.write("Correctas"+c):
    socument.write("Incorrectas"+i):