const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send("Pagina principal del manejo de COOKIES")
})

app.get('/setcookie', (req, res)=>{
    res.cookie('nombre de la cookie', 'cookie', {
        // maxAge: 10000,
        expires: new Date('2023-12-31'),
        httpOnly: true
    })
    res.send("Pagina principal del manejo de COOKIES")
})


app.listen(3000)
console.log('Server on port 3000')