const express = require('express')
const app = express()

const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // res.send('Holi World')

    // let salida = {
    //     nombre: 'DaviD',
    //     edad: 32,
    //     url: req.url
    // }

    // res.send(salida);

    res.render('home', {
        nombre: 'DaviD'
            //year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

// app.get('/data', (req, res) => {
//     res.send('Hola data');
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})