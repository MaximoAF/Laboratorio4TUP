import fs from 'fs';

// Función para agregar un nuevo contacto
const agregarContacto = (nombre, telefono, email) => {
  try {
    const datos = fs.readFileSync('contacto.json', 'utf-8');
    const contactos = JSON.parse(datos);
    const nuevoContacto = { nombre, telefono, email };

    // Agregar el nuevo contacto
    contactos.push(nuevoContacto);

    // Guardar los contactos
    fs.writeFileSync('contacto.json', JSON.stringify(contactos, null, 2));
    console.log('Contacto agregado con éxito.');
  } catch (error) {
    console.error('Error al agregar el contacto:', error);
  }
};

// Función para mostrar todos los contactos
const mostrarContactos = () => {
  try {
    const datos = fs.readFileSync('contacto.json', 'utf-8');
    const contactos = JSON.parse(datos);

    // Mostrar los contactos en consola
    console.log('Contactos:');
    contactos.forEach(contacto => {
      console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}`);
    });
  } catch (error) {
    console.error('Error al mostrar los contactos:', error);
  }
};

// Funcion para eliminar un contacto por nombre
const eliminarContacto = (nombre) => {
  try {
    const datos = fs.readFileSync('contacto.json', 'utf-8');
    const contactos = JSON.parse(datos);

    // Filtrar los contactos
    const contactosActualizados = contactos.filter(contacto => contacto.nombre !== nombre);

    // Verificar si se eliminó un contacto
    if (contactos.length === contactosActualizados.length) {
      console.log(`No se encontró un contacto con el nombre: ${nombre}`);
      return;
    }

    // Guardar los contactos 
    fs.writeFileSync('contacto.json', JSON.stringify(contactosActualizados, null, 2));
    console.log(`Contacto con nombre "${nombre}" eliminado con éxito.`);
  } catch (error) {
    console.error('Error al eliminar el contacto:', error);
  }
};

// Código de prueba
const prueba = () => {
  agregarContacto('Carlos López', '987-654-3210', 'carlos@example.com');
  mostrarContactos();
  eliminarContacto('Juan Perez');
  mostrarContactos();
};

// Ejecutar el código de prueba
prueba();
