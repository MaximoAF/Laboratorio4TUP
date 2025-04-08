import fs from 'fs'

// Obtenemos la hora actual
const obtenerFechaHora = () =>{
  const now = new Date()
  const date = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const hour = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
  return(`${date} ${hour}`)
}

// Creamos el archivo log.txt
fs.appendFileSync('log.txt', `${obtenerFechaHora()} - Inicio del programa\n`);

// Simulamos una tarea de 5 segundos
setTimeout(() => {
  fs.appendFileSync('log.txt', `${obtenerFechaHora()} - Ejecutando tarea...\n`);
  
  setTimeout(() => {
      fs.appendFileSync('log.txt', `${obtenerFechaHora()} - Tarea completada\n`);
  }, 5000);
}, 0);