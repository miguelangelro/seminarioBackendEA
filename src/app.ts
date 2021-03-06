//Archivo de servidor

import express from 'express';
import morgan from 'morgan';
import bodyParser from'body-parser';

import indexRotues from './routes/index'

//Inicializamos express
const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);

//middlewares: son funciones que te permiten gestionar las peticiones 
app.use(morgan('dev')); // Sirve para poder ver las peticiones al servidor en consola
//app.use(express.json());//Para entender los datos que me estan enviando
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //body formulario

//rutas
app.use('/agenda',indexRotues); // todo lo que llegue a la ruta localhost:3000/agenda/ será controlado por el fichero routes/index.ts

export default app;