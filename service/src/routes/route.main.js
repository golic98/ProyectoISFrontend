import { Router } from "express";
import { addPayVigilance, getAllPay } from "../controllers/pay.controllers.js";
import { authRequired } from "../middlewares/validate.token.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schema/auth.schema.js";
import { 
    register, 
    login, 
    logout, 
    profile, 
    verifyToken, 
    getAllUsers, 
    deleteOneUser, 
    getOneProfile, 
    updateProfile, 
    getAllUser, 
    createUserByAdmin, 
    updatePassword } 
    from "../controllers/user.controllers.js";

const router = Router();

// Ruta para registrar usuarios (validación con schema antes de ejecutar el controlador)
router.post("/register", validateSchema(registerSchema), register);

// Ruta para iniciar sesión (valida datos con schema)
router.post("/login", validateSchema(loginSchema), login);

// Ruta para cerrar sesión
router.post("/logout", logout);

// Ruta para obtener el perfil del usuario autenticado (requiere token)
router.get("/profile", authRequired, profile);

// Ruta para verificar la validez del token en cookies
router.get("/verify", verifyToken);

// Ruta para obtener usuarios filtrados (requiere autenticación)
router.get("/users", authRequired, getAllUsers);

// Ruta para obtener todos los usuarios sin filtros (requiere autenticación)
router.get("/allUser", authRequired, getAllUser);

// Ruta para eliminar un usuario por ID (requiere autenticación)
router.delete("/users/:id", authRequired, deleteOneUser);

// Ruta para obtener el perfil de un usuario por su ID (requiere autenticación)
router.get("/profile/:id", authRequired, getOneProfile);

// Ruta para actualizar el perfil de un usuario por ID (requiere autenticación)
router.put("/profile/:id", authRequired, updateProfile);

// Ruta para registrar un pago de vigilancia (requiere autenticación)
router.post("/payVigilance", authRequired, addPayVigilance);

// Ruta para obtener todos los pagos registrados (requiere autenticación)
router.get("/allPay", authRequired, getAllPay);

// Ruta para que el admin cree un usuario (valida con schema y requiere autenticación)
router.post("/createUser", validateSchema(registerSchema), authRequired, createUserByAdmin);

// Ruta para actualizar la contraseña (por username)
router.put("/updatePassword", updatePassword);

export default router;
