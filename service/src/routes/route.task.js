import { Router } from "express";
// Middleware para verificar que el usuario esté autenticado mediante token
import { authRequired } from "../middlewares/validate.token.js";
// Controladores para las tareas (task)
import { getTask, getOneTask, createTask, updateTask, deleteTask, getTaskHome } from "../controllers/task.controllers.js";
// Controladores para las tareas tipo 2 (task2)
import { getTask2, getOneTask2, createTask2, updateTask2, deleteTask2, getTaskHome2 } from "../controllers/task2.controllers.js";
// Middleware para validar datos con Zod
import { validateSchema } from "../middlewares/validate.middleware.js";
// Schemas de validación para cada tipo de task
import { createTaskSchema, createTaskSchema2 } from "../schema/task.schema.js";

const router = Router();

// ---------- RUTAS PARA TASK (tareas normales) ----------

// Crear una nueva task — requiere auth y validación de esquema
router.post("/task", authRequired, validateSchema(createTaskSchema), createTask);

// Obtener todas las tasks del usuario autenticado
router.get("/task", authRequired, getTask);

// Obtener tareas sin filtro para pantalla principal (home)
router.get("/taskhome", authRequired, getTaskHome);

// Obtener una task por ID
router.get("/task/:id", authRequired, getOneTask);

// Eliminar una task por ID
router.delete("/task/:id", authRequired, deleteTask);

// Actualizar una task por ID
router.put("/task/:id", authRequired, updateTask);


// ---------- RUTAS PARA TASK2 (tareas tipo 2) ----------

// Crear una nueva task2 — requiere auth y validación
router.post("/taskd", authRequired, validateSchema(createTaskSchema2), createTask2);

// Obtener todas las task2 del usuario autenticado
router.get("/taskd", authRequired, getTask2);

// Obtener todas las task2 sin filtro para pantalla home
router.get("/taskhomed", authRequired, getTaskHome2);

// Obtener una task2 por ID
router.get("/taskd/:id", authRequired, getOneTask2);

// Eliminar una task2 por ID
router.delete("/taskd/:id", authRequired, deleteTask2);

// Actualizar una task2 por ID
router.put("/taskd/:id", authRequired, updateTask2);

export default router;
