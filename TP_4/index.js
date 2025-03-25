import dotenv from "dotenv";
import { sumar } from "./math.js";
import readline from "readline";
import fs from 'fs'

// Activity 1
dotenv.config();

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);

// Activity 2
console.log(sumar(105, 25));

// Activity 3
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Cual es tu nombre: ', (nombre)=>{
  console.log(`Hola ${nombre}!!`)

  // Activity 4
  rl.question('Cual es tu edad: ', (edad)=>{
    const nacimiento = new Date().getFullYear() - parseInt(edad)
    console.log(`Tu año de nacimiento es ${nacimiento}?`)

    // Activity 5
    rl.question('Ingrese su correo: ',(correo)=>{
      fs.writeFileSync('datos.txt', `nombre: ${nombre}\nedad: ${edad}\ncorreo: ${correo}`)
      console.log('Datos guardados...')

      // Mostramos los datos
      
      const datos = fs.readFileSync('datos.txt', 'utf-8').split('\n')
      console.log(datos)
      
      // Cerramos el readline
      rl.close()
    })
  })

})
