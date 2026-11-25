import express from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))


app.use((req, res) => {
    res.status(404).json({message: "Not found"})
})

export default app