let ventas = [];

function registrarVenta() {

    const pelicula =
        document.getElementById("pelicula").value;

    const sala =
        document.getElementById("sala").value;

    const boletas =
        Number(document.getElementById("boletas").value);

    const precio =
        Number(document.getElementById("precio").value);

    const total = boletas * precio;

    const clave =
        prompt("Ingrese la clave de seguridad");

    if (clave !== "CINE") {

        alert("Clave incorrecta");

        return;
    }

    document.getElementById("resultado").innerHTML =
        "✅ Recaudación Total: $" + total;

    ventas.push(total);

    document.getElementById("contenidoTabla").innerHTML += `
        <tr>
            <td>${pelicula}</td>
            <td>${sala}</td>
            <td>${boletas}</td>
            <td>$${total}</td>
        </tr>
    `;

    actualizarGrafica();
}

function cambiarAsiento() {

    let hora = new Date().getHours();

    if (hora >= 15 && hora <= 18) {

        alert("Se aplica recargo del 5%");

    } else {

        alert("Sin recargo");

    }

}
