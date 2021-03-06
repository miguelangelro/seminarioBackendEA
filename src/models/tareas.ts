import { Schema, model, Document } from 'mongoose';

const tareaSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
},{versionKey: false}); // Para que no salga __V en cada documento guardado

export interface ITareas extends Document{
    title: string;
    description: string;

}

export default model<ITareas>('Tarea', tareaSchema); // "Guarda en la coleccion Tarea documentos con el modelo de tareaSchema"