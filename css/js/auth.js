function ingresar() {

    const usuario =
        document.getElementById("usuario").value;

    const clave =
        document.getElementById("clave").value;

    if (
        usuario === "Cinecali" &&
        clave === "Estrenos"
    ) {

        document.getElementById("login").style.display =
            "none";

        document.getElementById("panel").style.display =
            "block";

    } else {

        alert("Usuario o contraseña incorrectos");

    }

}
