const express  = require('express')
const app = express()


app.use(express.json())
 
let users = []

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const user = req.body;
   // console.log(user)
    users.push(user)
    res.status(200).send({message:'user created'})
})
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const founduser = users.find((user) => user.id === id)
    res.send(founduser)

})

app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id !== id)
    res.status(200).send({message:'user deleted'}) 
})








const port = 4000;
app.listen(port, () => {
    console.log('server is running on port 4000')
})