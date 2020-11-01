// [require] -> chama/importar as depedências 
const express = require('express');
const path = require('path');

// iniciando o express(biblioteca)
const server = express();

server
    // utilizando os arquivos estáticos
    .use(express.static('public'))
    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('views engine', 'hbs')
    // criar uma rota 
    .get('/', (request, response) => {
        return response.render('index')
    })

// ligar o servidor 
server.listen(5590)