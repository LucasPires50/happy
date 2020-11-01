// [require] -> chama/importar as depedências 
const express = require('express');

// iniciando o express(biblioteca)
const server = express();

// criar uma rota 
server.get('/', () => {
    console.log('oi')
})

// ligar o servidor 
server.listen(5590)