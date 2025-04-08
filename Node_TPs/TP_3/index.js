const yargs = require('yargs');
const fs = require('fs');

// Comando para saludar
const argv = yargs
  .command('saludar', 'Muestra un saludo', {
    nombre: {
      describe: 'Nombre de la persona a saludar',
      demandOption: true,
      type: 'string',
    },
  })
  .command('despedir', 'Muestra un mensaje de despedida', {
    nombre: {
      describe: 'Nombre de la persona a despedir',
      demandOption: true,
      type: 'string',
    },
  })
  .command('sumar', 'Suma dos números', (yargs) => {
    yargs.option('n1', {
      describe: 'Primer número',
      demandOption: true,
      type: 'number',
    }).option('n2', {
      describe: 'Segundo número',
      demandOption: true,
      type: 'number',
    });
  })
  .command('leer-json', 'Lee un archivo JSON y muestra su contenido', (yargs) => {
    yargs.option('archivo', {
      describe: 'Ruta al archivo JSON',
      demandOption: true,
      type: 'string',
    });
  })
  .help()
  .argv;

// Saludar
if (argv._.includes('saludar')) {
  if (argv.nombre) {
    console.log(`¡Hola, ${argv.nombre}!`);
  } else {
    console.log('Error: El argumento "nombre" es requerido.');
  }
}

// Despedir
if (argv._.includes('despedir')) {
  if (argv.nombre) {
    console.log(`¡Adiós, ${argv.nombre}!`);
  } else {
    console.log('Error: El argumento "nombre" es requerido.');
  }
}

// Sumar
if (argv._.includes('sumar')) {
  const resultado = argv.n1 + argv.n2;
  console.log(`La suma de ${argv.n1} y ${argv.n2} es: ${resultado}`);
}

// Leer JSON
if (argv._.includes('leer-json')) {
  if (argv.archivo) {
    fs.readFile(argv.archivo, 'utf8', (err, data) => {
      if (err) {
        console.log('Error al leer el archivo:', err);
      } else {
        console.log('Contenido del archivo JSON:', JSON.parse(data));
      }
    });
  } else {
    console.log('Error: El argumento "archivo" es requerido.');
  }
}


/*
Pruebas:
> node index.js saludar --nombre="juanma"
Hola, juanma!

> node index.js despedir --nombre="maxi"
¡Adiós, maxi!

> node index.js sumar --n1=13 --n2=45
La suma de 13 y 45 es: 58

> node index.js leer-json --archivo="./dataEJ.json"
Contenido del archivo JSON: {
  nombre: 'Juan',
  edad: 30,
  ocupacion: 'Desarrollador',
  habilidades: [ 'JavaScript', 'Node.js', 'React' ],
  activo: true
}
  
*/