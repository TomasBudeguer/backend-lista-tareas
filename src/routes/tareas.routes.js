import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tarea.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/tareas")
  .get(listarTareas)
  .post(
    [
      check("nombreTarea")
        .notEmpty()
        .withMessage("El nombre de la tarea es un campo obligatorio")
        .isLength({ min: 3, max: 50 })
        .withMessage("El nombre debe contener entre 3 y 50 caracteres"),
    ],
    crearTarea
  );
router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .put(
    [
      check("nombreTarea")
        .notEmpty()
        .withMessage("El nombre de la tarea es un campo obligatorio")
        .isLength({ min: 3, max: 50 })
        .withMessage("El nombre debe contener entre 3 y 50 caracteres"),
    ],
    editarTarea
  )
  .delete(borrarTarea);

export default router;
