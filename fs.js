const fs = require('fs');

// Ruta del archivo a leer
const filePath = 'archivo.txt';

// Leer el contenido del archivo
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  console.log('Contenido del archivo:', data);
});
