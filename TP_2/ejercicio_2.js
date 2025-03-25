import fs from "fs";

// Creamos el archivo 
const crearArchivo = () => {
  const contenido = 'Nombre: Máximo Aguilera\nEdad: 19\nCarrera: Programación\n';

  fs.writeFileSync("datos.txt", contenido);
};

// Obtenemos la hora actual
export const obtenerFechaHora = () =>{
  const now = new Date()
  const date = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const hour = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
  return(`${date} ${hour}`)
}

// Obtenemos los datos
const obtenerDatos = () => {
  crearArchivo()
  const datosString = fs.readFileSync("datos.txt", "utf-8").split("\n");

  const datos = {
    nombre: datosString[0].split("Nombre: ")[1],
    edad: datosString[1].split("Edad: ")[1],
    carrera: datosString[2].split("Carrera: ")[1],
  };

  // Mostramos los datos
  console.log(datos);

  // Agregamos la hora y le modificamos el nombre
  fs.appendFileSync('datos.txt', `Fecha de modificación: [${obtenerFechaHora()}]`)
  fs.renameSync('datos.txt', 'informacion.txt')

  // Eliminamos el archivo 'informacion.txt'
  setTimeout(()=>{
    fs.unlinkSync('informacion.txt')
    console.log('Se elimino el archivo "informacion.txt"')
  },10000)
};

obtenerDatos();
