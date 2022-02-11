//variables
let nombre = "Jefferson"
let apellido = "Pozo"
let nombreUsuarioPlatzi = "jeff-pozo"
let edad = 18
let correoElectronico = "pozojefferson410@gmail.com"
let mayorEdad = "true"
let dineroAhorrado = 47000
let deudas = 20000

console.log(nombre + " " + apellido)
console.log( dineroAhorrado - deudas)

//Funciones
function imprimir(nombre, apellido, nickname) {
    console.log("Mi nombre es " + nombre + " " + apellido + " pero prefieron que me digas " + nickname + ".")

}

//Condiciones
let tipoDeSucripcion = "Basic"
if (tipoDeSucripcion == "Free"){
    console.log("Puedes tomar solo los curso gratis")
}else if (tipoDeSucripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos por un mes")

}else if (tipoDeSucripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
}else if(tipoDeSucripcion == "ExpertPlus") {
    console.log("Tu y alguien más pueden tomar Todos los cursos de Platzi durante un año");
}
//sin else if
if (tipoDeSucripcion == "Free"){
    console.log("Puedes tomar solo los curso gratis")
}if (tipoDeSucripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos por un mes")

}if (tipoDeSucripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
}if(tipoDeSucripcion == "ExpertPlus") {
    console.log("Tu y alguien más pueden tomar Todos los cursos de Platzi durante un año");
}

//Ciclos


//Listas
let lista = ["Hola ", "Como ", "Dice ", "Que ", "Le ", "Va?"]

function printLista(arco){
    lista2 = arco
    console.log(lista2[0])
}
printLista(lista)