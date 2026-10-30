let ventas = [];

let ingresos = 0;
let boletasTotales = 0;
let funciones = 0;

function registrarVenta(){

    let pelicula =
    document.getElementById("pelicula").value;

    let sala =
    document.getElementById("sala").value;

    let boletas =
    Number(
        document.getElementById("boletas").value
    );

    let precio =
    Number(
        document.getElementById("precio").value
    );

    let total = boletas * precio;

    document.getElementById("resultado")
    .innerHTML = "⏳ Calculando...";

    setTimeout(()=>{

        document.getElementById("resultado")
        .innerHTML =
        "✅ Recaudación Total: $" + total;

        let clave =
        prompt(
        "Ingrese la clave CINE"
        );

        if(clave === "CINE"){

            ventas.push(total);

            ingresos += total;
            boletasTotales += boletas;
            funciones++;

            document.getElementById("ingresos")
            .innerHTML = "$" + ingresos;

            document.getElementById("totalBoletas")
            .innerHTML = boletasTotales;

            document.getElementById("funciones")
            .innerHTML = funciones;

            document.getElementById("tablaVentas")
            .innerHTML += `
                <tr>
                    <td>${pelicula}</td>
                    <td>${sala}</td>
                    <td>${boletas}</td>
                    <td>$${total}</td>
                </tr>
            `;

            actualizarGrafica();

            document.getElementById("pelicula").value="";
            document.getElementById("sala").value="";
            document.getElementById("boletas").value="";
            document.getElementById("precio").value="12000";

        }else{

            alert("Clave incorrecta");

            document.getElementById("panel").style.display="none";
            document.getElementById("login").style.display="block";

        }

    },3000);
}

function cambiarAsiento(){

    let hora = new Date().getHours();

    let base = 12000;

    if(hora >= 15 && hora <= 18){

        let recargo = base * 1.05;

        alert(
        "Recargo del 5%\nValor final: $" +
        recargo
        );

    }else{

        alert("Cambio realizado sin recargo");

    }

}
