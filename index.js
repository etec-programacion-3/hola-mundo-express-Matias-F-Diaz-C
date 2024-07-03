import express from 'express';

const app = express();

/**
 * Maneja la solicitud GET en la ruta "/"
 * @param {express.Request} req - Objeto de solicitud HTTP
 * @param {express.Response} res - Objeto de respuesta HTTP
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});
/**
 * Maneja la solicitud GET en la ruta "/hola"
 * @param {express.Request} req - Objeto de solicitud HTTP
 * @param {express.Response} res - Objeto de respuesta HTTP
 */
app.get('/hola', (req, res) => {
  res.send('Hola q onda!');
});
/**
 * Inicia el servidor en el puerto 3000
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
/**
 * Maneja la solicitud GET en la ruta "/saludo/:nombre"
 * @param {express.Request} req - Objeto de solicitud HTTP
 * @param {express.Response} res - Objeto de respuesta HTTP
 * @param {express.Response} req.params.nombre - Parametro variable en la ruta
 */
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hello '+nombre);
});

