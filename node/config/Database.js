import {Sequelize} from "sequelize";

const db = new Sequelize('asistencia_alumno','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;