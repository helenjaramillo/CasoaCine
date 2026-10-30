function ingresar() {

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if(usuario === "Cinecali" && clave === "Estrenos") {

        alert("Bienvenido al Sistema de Cine");

    } else {

        alert("Usuario o contraseña incorrectos");

    }
}
