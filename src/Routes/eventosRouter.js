import { Router } from "express";

const router = Router()

import {eventos,criarEventos} from '../Controllers/eventosController.js'

router.get('/agenda', eventos)
router.post("/criar", criarEventos)


export default router;