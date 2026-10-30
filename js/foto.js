async function activarCamara(){

    try{

        let stream =
        await navigator
        .mediaDevices
        .getUserMedia(
        {video:true}
        );

        document
        .getElementById("video")
        .srcObject = stream;

    }catch(error){

        alert(
        "No se pudo abrir la cámara"
        );

    }

}

function tomarFoto(){

    let video =
    document.getElementById("video");

    let canvas =
    document.getElementById("foto");

    let ctx =
    canvas.getContext("2d");

    ctx.drawImage(
        video,
        0,
        0,
        320,
        240
    );

}
