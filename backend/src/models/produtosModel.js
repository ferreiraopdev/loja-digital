import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const produtosModel = conn.define("protudos",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 12],
                    msg: "O campo nome é obrigatório!"
                }
            }
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: "O campo quantidade precisa ser numérico!"
                }
            }
        }
    },
    {}
)