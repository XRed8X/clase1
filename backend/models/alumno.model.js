import { Schema, model } from "mongoose"

const EsquemaAlumnos = new Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    }
}, {Collection: 'alumnos'} )

export const modeloAlumnos = model("Tabla de Alumnos", EsquemaAlumnos)