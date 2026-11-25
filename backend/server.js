import app from "./app.js";
import { conn } from "./src/config/conn.js";

const port = 3333
const listenServer = () => {
    try {
        conn.sync()
        app.listen(port, () => {
            console.log("Server running on: http://localhost:"+port)
        })
    } catch (error) {
        console.log("Error on inicializate server:", error)
    }
}

listenServer()