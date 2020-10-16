const express = require('express')
const path =  require('path')


const server = express()

server

// Utilizando arquivos staticos
.use(express.static('public'))

// configurar Template Engine
.set('views', path.join(__dirname, "view"))
.set('view engine', 'hbs')

// Criar uma rota
.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Ligar o servidor
server.listen(5500)