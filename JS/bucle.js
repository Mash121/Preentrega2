

let productos = ['Laptop', 'Celular', 'Tablet', "Smartwatch"];

console.log("Cantidad de elemetnos dentro de productos = " + productos.length);

//Bucle for que me permite iterar elemento por elemento 

for (let i = 0; i < productos.length; i++) {
 console.log(productos[i]);
}

let items= [
   { nombre: 'Laptop', descuento: true },
   { nombre: 'Celular', descuento: false },
   { nombre: 'Tablet', descuento: true }
 ];
  for (let i = 0; i < items.length; i++) {
   if (items[i].descuento) {
     console.log(items[i].nombre + " tiene descuento.");}}