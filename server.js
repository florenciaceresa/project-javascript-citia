const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app

app.use(express.urlencoded({ extended: false }));

// Configuración para servir archivos estáticos desde la carpeta "static"
app.use(express.static(__dirname + '/static'));

// Datos de usuario y contraseña preestablecidos
const usuarios = [
    { username: 'floceresa', password: '43366729' },
  ];

// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });

  // Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
  });

app.post('/login', (req, res) => {
    // Obtener el nombre de usuario y contraseña enviados en el formulario
    const username = req.body.username;
    const password = req.body.password;
  
    // Verificar las credenciales ingresadas con las preestablecidas
    const usuarioEncontrado = usuarios.find((user) => user.username === username && user.password === password);
  
    if (usuarioEncontrado) {
      // Las credenciales son correctas, redirigir al usuario a shop.html
      res.redirect('/shop.html');
    } else {
      // Las credenciales son incorrectas, mostrar un mensaje de error o redirigir a una página de error
      res.send('Credenciales incorrectas. Vuelve a intentar.');
    }
  });


  const port = 3000 // Port we will listen on

  // Function to listen on the port
  app.listen(port, () => console.log(`This app is listening on port ${port}`));