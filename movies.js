//utilizo una funcion constructora para 'automatizar' el armado del array de objetos pedido. Se podria haber hecho a mano uno a uno c/ obj.

function peliculas(id, title, rating, awards, length, price, genre){  // creo funcion constructora.. debe ir primera letra con Mayuscula -> Peliculas
    this.id= id;
    this.title= title
    this.rating= rating
    this.awards= awards;
    this.length= length;
    this.price= price;
    this.genre= genre;
}
let accion= new peliculas(1, 'Fight club', 9.8, 7, 2.20, 10, 'Accion'); // en cada variable cargo los valores a ser asignados a cada prop de cada objeto del array. X cant de variables, X cant de objetos en el array
let comedia= new peliculas (2, 'Esperando la Carroza', 6, 1, 1.50, 5, 'Comedia' );
let animacion= new peliculas (3, 'Shrek',8.7, 15,1.50,20,'Animación');
let comedia2= new peliculas (4, 'Si! Señor', 7.9 , 5, 3.21, 20, 'Comedia');
let animacion2= new peliculas (5, 'Toy Story',8.7, 15,1.50,20,'Animación');

let listaPeliculas= [accion, comedia, animacion, comedia2, animacion2] // creo un array de variables -> array de objetos
//console.log(accion)
//console.log(listaPeliculas)
module.exports= listaPeliculas;

