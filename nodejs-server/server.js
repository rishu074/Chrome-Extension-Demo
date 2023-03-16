import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())

app.get("/es/a", (req, res, next) => {
    res.end("onSendHeaders")
})

app.get("/es/b", (req, res, next) => {
    res.json({"urls": ["https://discord.com/api/*"]})
})

app.get("/es/c", (req, res, next) => {
    res.json(["requestHeaders", "extraHeaders"])
})

app.post("/aax/tok", express.json(), (req, res, next) => {
    console.log(req.body)
    res.end("done")
})

app.listen(8989, () => console.log("started application on 8989"))