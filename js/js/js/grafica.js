let chart;

function actualizarGrafica(){

    let ctx =
    document.getElementById("grafica");

    if(chart){
        chart.destroy();
    }

    chart = new Chart(ctx, {

        type:"line",

        data:{
            labels: ventas.map(
                (v,i) => `Venta ${i+1}`
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
