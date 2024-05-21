import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const marksModel = sequelize.define(
    'marks',
    // Model attributes are defined here
    {
        studentName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subjectName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        obtainMarks:{
            type: DataTypes.STRING,
            allowNull: false,
        },       
        totalMarks:{
            type: DataTypes.STRING,
            allowNull: false,
        },       
    },
    {
    // Other model options go here
    },
);

// `sequelize.define` also returns the model
// console.log(studentModel === sequelize.models.student); // true

export default marksModel;