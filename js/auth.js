function ingresar(){

    let usuario =
    document.getElementById("usuario").value;

    let clave =
    document.getElementById("clave").value;

    if(
        usuario === "Cinecali" &&
        clave === "Estrenos"
    ){

        document.getElementById("login")
        .style.display = "none";

        document.getElementById("panel")
        .style.display = "block";

    }else{

        alert("Usuario o contraseña incorrectos");

    }
}

setInterval(()=>{

    let fecha = new Date();

    document.getElementById("reloj").innerHTML =
    fecha.toLocaleString();

},1000);
