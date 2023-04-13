// A DIA DE HOY SE USA ESTE

function solicitarProducto(producto) {
    return new Promise((resolve, reject) => { //resolve y reject son dos funciones que se asignan automáticamente
        console.log("Solicitando:", producto, "de U-tad");
        //simulamos proceso asíncrono con setTimeout
        setTimeout(() => {
            if (producto === "MASTER") {
                //Aquí se ejecutaría la lógica de la venta, y al final la confirmación con resolve()
                resolve("Solicitud de MASTER realizada.");
            } else {
                reject('Este producto no está disponible actualmente');
            }
        }, 2000);
    });
}

function procesarPedido(respuesta) {
    //return new Promise((resolve, reject) => { //No estamos usando reject, así que se podría omitir
    return new Promise(resolve => { //Si es solo un parámetro, no son necesarios los paréntesis
        console.log("Procesando respuesta...");
        console.log("La respuesta fue:", respuesta);
        setTimeout(() => {
            resolve("Gracias por tu compra. Disfruta de tu master de U-tad");
        }, 4000);
    });
} 

async function realizarPedido(producto) { //Le indicamos que nuestra función tiene código asíncrono, y por tanto, que devolverá un Promesa
    try {
        //Detenemos la ejecución hasta que se complete el proceso con await (solo se puede usar con async)
        const respuesta = await solicitarProducto(producto); //Prueba a hacerlo con y sin "await"
        console.log("Respuesta recibida:", respuesta);
        const respuestaProcesada = await procesarPedido(respuesta); //Prueba a hacerlo con y sin "await"
        console.log(respuestaProcesada);
    } catch(err) {
        console.log(err);
    }
}

realizarPedido("MASTER");