import { Router } from "express";
import { crearTarea, listarTareas } from "../controllers/tarea.controllers";

const router = Router();

router.route("/tareas").get(listarTareas).post(crearTarea);
router.route("/tareas/:id").get().put().delete();

export default router;
