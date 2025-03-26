let inputNombre=document.getElementById("nombre")
let inputContraseña=document.getElementById("contraseña")
let boton=document.getElementById("boton")


boton.addEventListener("click", function(evento){
    evento.preventDefault()


    let nombre=inputNombre.value
    let contraseña=inputContraseña.value
    let nombreBaseDatos="Coco"
    let contraseñaBaseDatos="00000"


if(nombre== nombreBaseDatos && contraseña==contraseñaBaseDatos){
    alert("Ok")

}else{
    alert("revisa los datos ingresados")
}



})