// ANTES SE USABA MAS ESTE

const promesaCumplida = false;

const FAILURERATE = 0.2;
const DELAY = 3000;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let randomValue = Math.random();

        if(randomValue > FAILURERATE){
            resolve('resolved with ' + String(randomValue));
        }
        else{
            reject('rejected with '+ String(randomValue));
        }
    }, DELAY);
});

const manejarPromesaCumplida = (valor) => {
    console.log("THEN: " + String(valor));
}

const manejarPromesaRechazada = (razonRechazo) => {
    console.log("CATCH: " + String(razonRechazo));
}

miPromesa.then(manejarPromesaCumplida).catch(manejarPromesaRechazada);

