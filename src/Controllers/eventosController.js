import conn from '../Config/conn.js'
import {v4 as uuidv4} from 'uuid'

export const eventos = (request, response) => {
    const sql = /*sql*/`SELECT * FROM eventos `;
    conn.query(sql, (err, data) => {
        if (err) {
            response.status(500).json({ message: "Erro ao buscar evento" })
            return
        }
        const eventos = data
        response.status(200).json(eventos);
    });
}


export const criarEventos = (request, response) => {
    const { titulo, data_evento} = request.body

    if (!titulo) {
        response.status(400).json({ message: "O titulo é obrigatorio" })
        return
    } if (!data_evento) {
        response.status(400).json({ message: "O data é obrigatorio" })
        return
     } 
    const checkSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ? AND ?? = ?`
    const checkSqlData = ["titulo", titulo, "data_evento", data_evento]
    conn.query(checkSql, checkSqlData, (err, data) => {
        if (err) {
            console.error(err)
            response.status(500).json({ message: "Erro Criar Evento" })
            return console.log(err);
        }
        if (data.length > 0) {
            response.status(409).json({ message: "Evento já cadastrado" });
            return console.log(err);
        }
        
        const id = uuidv4()
        const insertSql = /*sql*/ `INSERT INTO eventos
    (??, ??, ??) VALUES (?,?,?)`

        const insertData = ["evento_id", "titulo", "data_evento", id, titulo, data_evento]
        conn.query(insertSql, insertData, (err) => {
            if (err) {
                console.error(err)
                response.status(500).json({ message: "Erro ao cadastrar eventos" });
                return
            }
            response.status(201).json({ message: "Evento cadastrado"})
            
        })

       
    });
}

