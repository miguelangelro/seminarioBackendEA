Demo para el seminario 1. 

Backend: Nodejs, MongoDB, mongoose, Express, Typescript.

Pasos para instalar el proyecto:


1. Git clone de este repositorio --> git clone https://github.com/miguelangelro/seminarioBackendEA.git
2. cd seminarioBackendEA
3. npm install
4. Hace falta ejecutar mongod primero.
5. npm start

Para atacar a la API hace falta usar Postman u otra interfaz de Restclient.

Al principio la BBDD esta vacia.

GET http://localhost:3000/agenda  Devuelve todas las tareas con sus descripciones

GET http://localhost:3000/agenda/nombretarea Devuelve la tarea que le pasamos como parametro

POST http://localhost:3000/agenda/task  Introduce una nueva tarea. Se pasa la tarea en el cuerpo del mensaje en formato JSON. 

Ejemplo:

{
    "title":"Deberes",
    "description": "Hacer los deberes de EA"
}

DELETE http://localhost:3000/agenda/tareaAeliminar Elimina la tarea que le pasamos como parametro.

PUT http://localhost:3000/agenda/update Se actualiza la tarea con los parametros que le pasamos en el cuerpo del mensaje.

Se ha instalado el modulo nodemon que permite ejecutar el codigo de manera automática cada vez que hay un cambio en la carpeta src. El paquete nodemon.json es el fichero de configuración.

También se ha instalado el modulo morgan para ver las peticiones en consola.

Para desarrollo usar el comando npm run dev

Y ya estaría, creo...