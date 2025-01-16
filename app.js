require('dotenv').config();
const express = require('express');
const app = express();
const port = 8099;

//Contenido estático.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//Para rutas específicas.
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi primera aplicación web');
})

app.post('/saludo', (req, res) => {
    const nombre = req.body.nombre || 'primer';
    const contrasena = req.body.contrasena || '1234';
    res.send('Hola ' + nombre + '. Tu contraseña: ' + contrasena);
});

app.get('/precios', (req, res)=>{
    res.send('<h1>Precios</h1> <hr> <p>Ordenador: 1000</p>');
})

app.listen(port, ()=>console.log(`Servidor escuchando en el puerto ${port}`));

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html');
})

app.post('/factorial', (req, res) => {
    const numero = req.body.numero;
    
    // Validar si el número es válido
    if (numero == undefined || isNaN(numero)) {
        return res.status(400).send('Número no válido');
    }

    // Función factorial corregida
    const factorial = (n) => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    };

    const resultado = factorial(Number(numero));
    res.send(`El factorial de ${numero} es ${resultado}`);
});