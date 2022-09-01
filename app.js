const pel= require('./movies')  // importo el modulo creado en movies.js --> importo un array de objetos.   
                                  //La variable donde se guarda el 'require' del modulo puede tener cualquier nombre.
                                 //el modulo importado de movies.js esta en misma carpeta que app.js, por lo cual no debemos declarar ruta de carpeta
console.log('-----------------------------------------------------------------------------')

let moviesDH = {     //objeto de metodos de funciones.
    listMovies : function() {        //metodo de objeto.
        console.log ('LISTA DE TITULOS\n-----------------')
        pel.forEach((pelicula, index ) => console.log([index +1] + '. ' + pelicula.title))  
                                //.forEach((pelicula, index ) barre todos los objetos del array-> pelicula:es cada objeto, index:arranca en cero.
    }

};
moviesDH.listMovies() ;  // llamo al metodo de objeto.

    searchMovie : function (parametro) {
        let peli = pel.find(pelicula => (pelicula.id == parametro)|| (pelicula.title == parametro)) //pelicula es el objeto entero, el find barre cada objeto.
                                    // barre cada objeto del array y compara los valores de las dos props con ''parametro'' ingresado, devolviendo el primero que encuentre.

        if (peli == undefined){  //ningun objeto cumple la condicion al barrer el objeto con el .find.
            return null
        } else {
            console.log(peli)
            console.log(peli.id)
            console.log(peli.genre)
        }
    };

moviesDH.searchMovie('Toy Story')  //asigno argumento al parametro de la funcion metodo de objeto.
moviesDH.searchMovie('1')


    searchMoviesByGenre: function (genre){  //metodo de objeto.

        let pelis1= pel.filter(pelicula => pelicula.genre == genre );  //al barrer el array de objetos, devuelve TODOS aquellos que cumplen con la condicion.
        console.log(pelis1[1].id)  //para probar dentro de la lista de objetos.
        
        if (pelis1.length == 0){  //quiere decir que la lista de objetos devuelta no tiene objetos dentro.
            return (null)
        } else {
            console.log(pelis1)
            
        } 
        
    };

moviesDH.searchMoviesByGenre('Animación')



    totalPrice: function () {  // metodo de objeto. Tengo una funcion como valor de una prop.
        
        let totalPrecios= []
        pel.forEach(function(obj){    // barre el arrray de peliculas (obj), una por una,
                                     //  tambien como fc flecha: pel.forEach( obj => console.log(obj.price)  
        console.log(obj.price)       // imprime el precio de cada pelicula del array, una por una.   
            
        totalPrecios.push(obj.price)  // se van agregando de a uno en el array, los precios de cada objeto.
        console.log(totalPrecios) 
        } )
        console.log('------')
        console.log(totalPrecios) 
        
        console.log('**************************************')
       
        let precioReducido = totalPrecios.reduce(function (acumulador, numero){   //realiza la sumatoria de todos los valores del array.
            return acumulador + numero
        
        })
        console.log (precioReducido)           //devuelve por consola el total obtenido del reduce.
        
    }
}
moviesDH.totalPrice()

    changeMovieGenre: function (id, nuevoGenre) {  //metodo de objeto.
        
        let peliN= pel.find(obj => (obj.id == id))  //.find devuelve el primer objeto del array que cumpla con la condicion.
        console.log(peliN)
        peliN.genre= nuevoGenre  //asigno nuevo valor ingresado ('nuevoGenre') a la propiedad 'genre' del objeto encontrado por el .find()
        console.log (peliN)            
},
        
    }
moviesDH.changeMovieGenre( 3,'terror')      //instancio a la funcion metodo con argumentos de param de funcion.