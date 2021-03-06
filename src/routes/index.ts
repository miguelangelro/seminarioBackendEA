//Sirve para guardar las rutas/url del servidor.
import {Router} from 'express';
import {getAll, getTarea, newTarea, updateTarea, deleteTarea} from '../controllers/tareaController';
//inicializo
const router = Router();

router.get('/', getAll);
router.get('/:task', getTarea);
router.post('/task',newTarea);
router.delete('/:task', deleteTarea);
router.put('/update', updateTarea);

export default router;