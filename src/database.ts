//Establecer conexión con la BBDD de MongoDB a partir de mongoose, tambien nos permite establecer los modelos
//los datos que vamos estar guardando.

import mongoose from 'mongoose'

export async function startConnection() {
    await mongoose.connect('mongodb://localhost/tareas',{
        useNewUrlParser: true,
        useFindAndModify: false ,
        useUnifiedTopology: true 
    });
    console.log('Database is connected');
}