let ventas = [];

function registrarVenta(){

    let pelicula =
    document.getElementById("pelicula").value;

    let sala =
    document.getElementById("sala").value;

    let boletas =
    Number(document.getElementById("boletas").value);

    let precio =
    Number(document.getElementById("precio").value);

    let total = boletas * precio;

    let clave =
    prompt("Ingrese la clave de seguridad");

    if(clave !== "CINE"){

        alert("Clave incorrecta");

        document.getElementById("panel").style.display="none";
        document.getElementById("login").style.display="block";

        return;
    }

    document.getElementById("resultado").innerHTML =
    "Recaudación Total: $" + total;

    ventas.push(total);

    let fila = `
        <tr>
            <td>${pelicula}</td>
            <td>${sala}</td>
            <td>${boletas}</td>
            <td>$${total}</td>
        </tr>
    `;

    document.getElementById("contenidoTabla")
    .innerHTML += fila;

    actualizarGrafica();
}

function cambiarAsiento(){

    let hora = new Date().getHours();

    if(hora >= 15 && hora <= 18){

        alert(
          "Cambio de asiento con recargo del 5%"
        );

    }else{

        alert(
           "Cambio realizado sin recargo"
        );

    }

}
