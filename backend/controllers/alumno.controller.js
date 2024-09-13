import { modeloAlumnos } from "../models/alumno.model.js";

// Insertar un nuevo alumno
modeloAlumnos.create({
    name: "El Lalo",
    lastName: "Lara",
    age: 20
})

export const test = () => {
    console.log("Test de creación de alumnos exitoso");
}