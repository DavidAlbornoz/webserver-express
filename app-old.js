const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
                nombre: 'DaviD',
                edad: 32,
                url: req.url
            }
            //  JSON.stringify convierte a formato Json
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8000);

console.log('Escuchando el port 8000');