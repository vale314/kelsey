// Para tamano se inicia en 1
// Para contar se inicia en 0

var nombre = [
        "Valentin", 
        "Kelsey", 
        "Jaime", 
        "Ale"
        ]
        
var califiacionesMath = [
        10,
        5,
        1,
        9
    ]
        
// Estructuras de control (Iteracion)

// For, While, Do While
for(var i = 0; i < nombre.length; i++){
    console.log(
                "Nombre: " + nombre[i] + 
                " - Califiaciones: " + califiacionesMath[i]
                )
}


console.log("---- Ciclo While ----")


// While (Condicion)
var i = 0

while(i < nombre.length){
    //repetir
    
    console.log("Nombre: " + nombre[i])
    i++;
}





