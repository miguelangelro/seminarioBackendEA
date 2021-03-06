// En este archivo se almacenan las funciones que permiten crear, eliminar y listar las tareas.
import { request, Request, Response} from 'express'

import  Tarea from '../models/tareas'

export async function getAll (req:Request, res:Response): Promise<Response> {
    
    const data = await Tarea.find({});
    
    if(data != null)
    return res.status(200).json(data);

    else if(data==null) 
    return res.status(404).json(data);

    else return res.status(500).json({"mensaje":"Error"});
    
}

export async function getTarea (req:Request, res:Response): Promise<Response> {
    const query = req.params.task;
    const data = await Tarea.find({"title": query});
    
    if(data != null)
    return res.status(200).json(data);

    else if(data==null) 
    return res.status(404).send("Tarea no encontrada");

    else return res.status(500).json({"mensaje":"Error"});
    
}
export async function newTarea(req:Request, res:Response): Promise<Response>{
    const resultado = new Tarea({
        "title": req.body.title,
        "description": req.body.description
    });

    console.log(req.body);
    await resultado.save();
    return res.status(201).json({
        "mensaje:": "Tarea guardada correctamente",
        resultado
    });
    
}
export async function updateTarea (req:Request, res:Response): Promise<Response> {

    const {title, description} = req.body;
    
    await Tarea.findOneAndUpdate({"title": title}, {$set:{"description":description}});
    return res.status(201).send("Actualizado.");
}

export async function deleteTarea (req: Request, res: Response): Promise<Response>{
    const task = req.params.task;
    await Tarea.findOneAndDelete({"title":task});
    return res.status(200).send("Deleted");
}