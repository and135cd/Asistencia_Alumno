import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nombre: DataTypes.STRING,
    hora_entrada: DataTypes.STRING,
    hora_salida: DataTypes.STRING,
    fecha: DataTypes.DATE,
    
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();