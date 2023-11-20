const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

const mainRoutes = require('./routes/mainRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

app.get("/", mainRoutes);
app.get("/registro", mainRoutes);
app.get("/login", mainRoutes);
app.get("/prueba", mainRoutes);

app.get('*', mainRoutes);
/*function(req, res){
  res.send('¡Lo siento, no puedo encontrar eso!', 404);
});*/
