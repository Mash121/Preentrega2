

let edad = 18
let esVIP = true;

/*
if(edad > 17) {
    console.log("Se permite el ingresar al evento");

    if(esVIP) {
        console.log("Se permite el ingreso al VIP");
    } else {
        console.log("No se permite el ingreso al VIP")
    }
} else {
    console.log("No se permite el ingreso de menores")

}
    */


if(edad > 17 || esVIP) {
    console.log("ingresa al evento y al VIP")
} else if(edad > 17) {
    console.log("ingresa al evento");
} else {
    console.log("No puede ingresar al evento")
}

let esMarciano = false;

if(!esMarciano) {
    console.log("Hola entidad no marciana");
}