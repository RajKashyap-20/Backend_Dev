const express = require("express")

const app = express();

const PORT =8000;

app.get("/users",(req, res)=>{
    res.send("<h1>wellcome to home page</h1>")
})

app.get("/users/:id",(req, res)=>{
    const userId= req.params.id
    res.send("you are requesting for user:${userID}")
})

app.listen(PORT, ()=>{
    console.log('server is running on port:${PORT}')
})
