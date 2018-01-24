var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    method: 'post',
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

var client = http.request(configuracoes, (res) => {
    console.log(res.statusCode);
    res.on('data', (body) => console.log('Corpo: ' + body));
});

var produto = {
    titulo : 'mais sobre node',
    descricao: 'node, javascript e um pouco sobre http',
    preco: '100'
}

client.end(JSON.stringify(produto));
