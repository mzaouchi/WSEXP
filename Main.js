const express = require('express')

const app = express()

const port = 5000

const MiddleWare=(req,res,next)=>{
    console.log("GOMYCODE")
    next()
}

app.use(MiddleWare)

// app.get('/test',(req,res)=>{
//     res.send('Hello Aziz')
// })

// app.get('/balise',(req,res)=>{
//     res.send('<h1>Mamino</h1>')
// })

// app.get('/page',(req,res)=>{
//     // console.log(__dirname)
//     res.sendFile(__dirname+"/public/Contact.html")
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+"/public/style.css")
// })

// app.get('/mamino',(req,res)=>{
//     res.sendFile(__dirname+"/public/")
// })

app.use(express.static('public'))

app.listen(port,console.log(`Server is running on the port ${port}`))