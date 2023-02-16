const express = require('express')

const app = express()

const port = 5000

var users = [
    {name : "Aziz",age : 20, id : Math.random()},
    {name : "Raslen",age : 27, id : Math.random()},
    {name : "Mamino",age : 19, id : Math.random()},
] 

app.use(express.json())
//Read
app.get('/getUsers',(req,res)=>{
    res.send({Msg :"List of users",users})
})
//Create
app.post('/addUser',(req,res)=>{
    users = [...users,req.body]
    res.send({Msg:"User added",users})
})
//Delete
app.delete('/deletUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(el=> el.id != id)
    res.send({Msg:"User deleted",users})
})
//Update
app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(el=> el.id == id ? {...el,...req.body} : el)
    res.send({Msg:"User updated",users})
})







app.listen(port,console.log(`Server is running on the port ${port}`))