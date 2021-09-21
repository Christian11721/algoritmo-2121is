//primer if-else
var edad = 12 
if ( edad > 10 ) {
    console.log("Joven en secundaria")
}else{
console.log("Niño en primaria")
}
//segundo if-else
var descuento = 50
if (descuento > 500) {
    console.log("Maneja descuento")
}else{
    console.log("No hay descuento")
}
//tercer if-else
var nota = 5
if (nota <= 10) {
    console.log("Aprobo la meteria")
}else{
    console.log("Reprobo la materia")
}
//cuarto if-else
var deberes = 10
if (deberes <= 8) {
    console.log("Salir a una reunión")
}else{
    console.log("No vas a salir a la reunión")
}
//quinto if-else
var dinero = 20
if (dinero <= 13) {
    console.log("Comprar un chocolate")
}else{
    console.log("Comprar un refresco")
}
//primero swich
var descuento = "pantalon";
var pantalon = "500";
var persona = "luis";
var dia = "viernes";
var asueto = "dia festivo"
switch (descuento){ 
    case "pantalon":   
    console.log("Descuento del producto")  
     break; 
}
switch (pantalon) {
    case "500":
      console.log("No hay descuento")   
}
switch (persona){
    case "luis":
        console.log("Hola luis")
        break; 
}
switch (dia){
      case "viernes":
          console.log("Hoy es viernes")
          break; 
} 
switch (asueto){
    case "dia festivo":
        console.log("Hoy es dia de descazo")
        break; 
}
//if-else-switch
var comida = "pozole";
var comida2 = "menudo";
var menu = "carta";
var pedir = "cortesia"; 
var comer = "mucho";
var comer2 = "poco";
switch (comida){
    case "pozole":
        if (comida2 == "menudo") {
            console.log("Si como pozole");
        }else{
            console.log("Como pozole")
        }
        break;
}
if (comida == "pozole"){
    console.log("Comer pozole")  
}else{
    switch (comida2){
        case "menudo":
            console.log("comer menudo");
            break;
    }
}
switch (menu ){
    case "carta":
        if (menu == "carta"){
            console.log("Pido desde la carta");
        }else{
            console.log("Pedir la cortesia")
        }
        break;
}
if (menu == "carta"){
    console.log("Pedir carta")
}else{
    switch (pedir){
        case "cortesia":
            console.log("Pedir cortesia");
            break;
    }
}
switch (comer){
    case "mucho": 
    if (comer == "mucho"){
        console.log("Comere mucho")
    }else{
        console.log("comer poco")
    }
    break; 
}


