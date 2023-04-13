const http = require('http');

const PORT = 3000;


const servidor = http.createServer((req, res) => {
    //logica de la request
    res.setHeader('application/json');
    console.log(res.getHeaders());


    res.end({
        message: "hola"
    }); // envia la respuesta cuando termina
});


servidor.listen(PORT, ()=>{
    console.log("Servidor escuchando en localhost puerto ", PORT);
    setInterval(() => {
        console.log("hola");
    },3000);
});

