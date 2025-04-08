import fs from 'fs';

// Funcion para contar las palabras de una archivo
const contarPalabras = (archivo, palabra) => {
  try {
    const contenido = fs.readFileSync(archivo, 'utf-8');
    const contenidoMinusculas = contenido.toLowerCase();
    const regex = new RegExp(`\\b${palabra}\\b`, 'g');
    const coincidencias = contenidoMinusculas.match(regex);
    const cantidad = coincidencias ? coincidencias.length : 0;
    console.log(`La palabra "${palabra}" aparece ${cantidad} veces en el archivo "${archivo}".`);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
};

const [archivo, palabra] = process.argv.slice(2);

if (!archivo || !palabra) {
  console.log('Por favor, proporciona un archivo y una palabra como argumentos.');
  process.exit(1);
}

contarPalabras(archivo, palabra);

// node ejercicio_4.js textoEjemplo.txt lorem
