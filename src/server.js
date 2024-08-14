import "dotenv/config";
import express, { request, response } from "express";

import conn from "./Config/conn.js";

import '../src/Models/palestrantesModel.js'
import './Models/participantesModel.js'
 import '../src/Models/eventosModel.js'
 import './Models/inscreverParticipantes.js'



const app = express()
const PORT = process.env.PORT

import palestranteRouter from './Routes/palestrantesRouter.js'
import eventosRouter  from "./Routes/eventosRouter.js";
import participantesRouter from './Routes/participantesRouter.js'
import { inscreverParticipantes } from "./Controllers/inscreverParticipantes.js";


app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use("/eventos", palestranteRouter)
app.use("/eventos", eventosRouter)
app.use('/eventos/participantes', participantesRouter)
app.use('/eventos', inscreverParticipantes)


app.listen(PORT, ()=>{
    console.log("Servidor on PORT"+PORT)
})