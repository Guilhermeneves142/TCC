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
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";


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

// AUTHENTICAÇÃO
router.post("/login",authenticateController.login);
router.use(ensureAuthenticate)

router.get("/clarify",authenticateController.clarifyToken);
// CONSULTORIO
router.post("/consultorio", consultorioController.createConsultorio)
router.get("/consultorio/findAll", consultorioController.findAll)
// NUTRICIONISTA
router.post("/nutricionista", nutricionistaController.createNutricionista)
router.get("/nutricionista/findAll", nutricionistaController.findAll)
router.get("/nutricionista/findById/:idNutricionista", nutricionistaController.findById)
router.post("/nutricionista/bindConsultorio", consultorioController.bindNutricionistaWithCOnsultorio)
// ALIMENTO
router.post("/alimento",alimentoController.createAlimento)
router.get("/alimento/findAll", alimentoController.findAll)
// ANAMNESES
router.get("/anamneses/findAll", anamnesesController.findAll)
// ANTROPOMETRICO
router.get("/antropometrico/findAll", antropometricoController.findAll)
//ATENDIMENTO
router.get("/atendimento/findAll", atendimentoController.findAll)
//DOENCA
router.post("/doenca", doencaController.createDoenca)
router.get("/doenca/findAll", doencaController.findAll)
//EXAME
router.get("/exame/findAll", exameController.findAll)
//OBJETIVO
router.get("/objetivo/findAll", objetivoController.findAll)
router.get("/objetivo/:idObjetivo",objetivoController.findById)
router.post("/objetivo",objetivoController.createObjetivo)
//PACIENTE
router.get("/paciente/findAll", pacienteController.findAll)
router.post("/paciente/create",pacienteController.createPaciente)
//PLANO ALIMENTAR
router.get("/planoAlimentar/findAll", planoAlimentarController.findAll)
//REFEICAO
router.get("/refeicao/findAll", refeicaoController.findAll)
router.get("/refeicao", refeicaoController.createRefeicao)
//RESPONSAVEL
router.get("/responsavel/findAll", responsavelController.findAll)
router.post("/response/create",responsavelController.createResponsavel)

export {router};