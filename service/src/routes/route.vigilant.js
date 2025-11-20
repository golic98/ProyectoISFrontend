import { Router } from "express";
// Middleware que verifica si el usuario está autenticado mediante token
import { authRequired } from "../middlewares/validate.token.js";
// Controladores para el módulo de vigilancia (horarios y visitas)
import { createSchedule, createVisit, getAllSchedules, getAllVisits } from "../controllers/vigilant.controllers.js";

const router = Router();

// ----------- RUTAS PARA HORARIOS (SCHEDULES) -----------

// Crear un nuevo horario — requiere autenticación
router.post("/schedules", authRequired, createSchedule);

// Obtener todos los horarios — requiere autenticación
router.get("/schedules", authRequired, getAllSchedules);


// ----------- RUTAS PARA VISITAS (VISITS) -----------

// Registrar una nueva visita — requiere autenticación
router.post("/visit", authRequired, createVisit);

// Obtener todas las visitas — requiere autenticación
router.get("/visits", authRequired, getAllVisits);

export default router;
