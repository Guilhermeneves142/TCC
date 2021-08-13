import { Router } from "express";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { ConsultorioController } from "./controllers/ConsultorioController";
import { NutricionistaController } from "./controllers/NutricionistaController";
import { AlimentoController } from "./controllers/AlimentoController";
import { AnamnesesController } from "./controllers/AnamnesesController";
import { AntropometricoController } from "./controllers/AntropometricoController";
import { AtendimentoController } from "./controllers/AtendimentoController";
import { DoencaController } from "./controllers/DoencaController";
import { ExameController } from "./controllers/ExameController";
import { ObjetivoController } from "./controllers/ObjetivoController";
import { PacienteController } from "./controllers/PacienteController";
import { PlanoAlimentarController } from "./controllers/PlanoAlimentarController";
import { RefeicaoController } from "./controllers/RefeicaoController";
import { ResponsavelController } from "./controllers/ResponsavelController";


const router = Router();
const consultorioController = new ConsultorioController();
const nutricionistaController = new NutricionistaController();
const authenticateController = new AuthenticateController();
const alimentoController = new AlimentoController();
const anamnesesController = new AnamnesesController();
const antropometricoController = new AntropometricoController();
const atendimentoController = new AtendimentoController();
const doencaController = new DoencaController();
const exameController = new ExameController();
const objetivoController = new ObjetivoController();
const pacienteController = new PacienteController();
const planoAlimentarController = new PlanoAlimentarController();
const refeicaoController = new RefeicaoController();
const responsavelController = new ResponsavelController();

router.post("/login",authenticateController.login);
router.get("/clarify",authenticateController.clarifyToken);
router.post("/consultorio/create", consultorioController.createConsultorio)
router.get("/consultorio/findAll", consultorioController.findAll)
router.post("/nutricionista/create", nutricionistaController.createNutricionista)
router.get("/nutricionista/findAll", nutricionistaController.findAll)
router.get("/nutricionista/findById/:idNutricionista", nutricionistaController.findById)
router.post("/nutricionista/bindConsultorio", consultorioController.bindNutricionistaWithCOnsultorio)
router.get("/alimento/findAll", alimentoController.findAll)
router.get("/anamneses/findAll", anamnesesController.findAll)
router.get("/antropometrico/findAll", antropometricoController.findAll)
router.get("/atendimento/findAll", atendimentoController.findAll)
router.get("/doenca/findAll", doencaController.findAll)
router.get("/exame/findAll", exameController.findAll)
router.get("/objetivo/findAll", objetivoController.findAll)
router.get("/objetivo/:idObjetivo",objetivoController.findById)
router.post("/objetivo",objetivoController.createObjetivo)
router.get("/paciente/findAll", pacienteController.findAll)
router.get("/planoAlimentar/findAll", planoAlimentarController.findAll)
router.get("/refeicao/findAll", refeicaoController.findAll)
router.get("/responsavel/findAll", responsavelController.findAll)

export {router};