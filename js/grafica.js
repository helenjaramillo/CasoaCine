let grafica;

function actualizarGrafica(){

    const ctx =
    document.getElementById("grafica");

    if(grafica){
        grafica.destroy();
    }

    grafica = new Chart(ctx,{

        type:"line",

        data:{
            labels: ventas.map(
                (v,i) => "Venta " + (i + 1)
            ),

            datasets:[{
                label:"Recaudación",
                data:ventas,
                borderColor:"red",
                borderWidth:3
            }]
        }
    });
}
