const express = require('express')
const path =  require('path')
const pages = require('./pages')

const server = express()

server
// utilizar req do boy
.use(express.urlencoded({extended:true}))

// Utilizando arquivos staticos
.use(express.static('public'))

// configurar Template Engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Ligar o servidor
server.listen(5500)