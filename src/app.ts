import express from "express"

const app = express()

app.get("/", (req, res) => {
     res.json({ message: "Welome to E-Lib APIs" })
})

export default app
