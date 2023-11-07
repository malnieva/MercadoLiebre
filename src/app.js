const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

/*const port = 3030;
app.listen(port, () => console.log(`http://localhost:${port}`));*/
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form_pages", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form_pages", "login.html"));
});

app.use(function (req, res, next) {
  res.status(404).send("¡Lo siento, no puedo encontrar eso!");
});
