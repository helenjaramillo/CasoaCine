function calcular() {

    let boletas =
        Number(document.getElementById("boletas").value);

    let precio =
        Number(document.getElementById("precio").value);

    if (boletas <= 0 || precio <= 0) {

        alert("Ingrese valores válidos");

        return;
    }

    let total = boletas * precio;

    let claveSeguridad =
        prompt("Ingrese la clave de seguridad");

    if (claveSeguridad === "CINE") {

        document.getElementById("resultado").innerHTML =
            "Recaudación Total: $" + total;

    } else {

        alert("Clave incorrecta");

        document.getElementById("panel").style.display = "none";

        document.getElementById("login").style.display = "block";

    }
}
