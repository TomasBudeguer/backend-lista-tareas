import Tarea from "../models/tarea";

export const listarTareas = (req, res) => {
  res.send("Esto es una prueba de la peticion GET");
};

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();

    res.status(201).json({
      mensaje: "La tarea fue creada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar tarea",
    });
  }
};
