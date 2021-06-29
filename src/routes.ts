import { Router } from "express";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { ConsultorioController } from "./controllers/ConsultorioController";
import { NutricionistaController } from "./controllers/NutricionistaController";


const router = Router();
const consultorioController = new ConsultorioController();
const nutricionistaController = new NutricionistaController();
const authenticateController = new AuthenticateController();

router.post("/login",authenticateController.login);
router.post("/consultorio/create", consultorioController.createConsultorio)
router.get("/consultorio/findAll", consultorioController.findAll)
router.post("/nutricionista/create", nutricionistaController.createNutricionista)
router.get("/nutricionista/findAll", nutricionistaController.findAll)

export {router};