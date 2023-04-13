const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const router = require("./routes/tracks")
require("dotenv").config();

const app = express()

//Le decimos a la app de express() que use cors para evitar el error Cross-Domain (XD)
app.use(cors()) 
app.use(express.json())

//Le digo que directorio es publico
app.use(express.static("storage")) // http://localhost:3000/file.jpg


/* Aquí invocamos a las rutas */
//app.use("/api", require("./routes/tracks"))
//app.use("/api", require("./routes/users"))
//app.use("/api", require("./routes/storage"))

app.use("/api", require("./routes")) //Lee routes/index.js por defecto

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Servidor escuchando en el puerto " + port)
    dbConnect();
})



