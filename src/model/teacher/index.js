import {DataTypes } from 'sequelize';
import sequelize from '../../db/config.js';

const teacherModel = sequelize.define(
    'teacher',
    {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
      // allowNull defaults to true
    },
    course: {
        type: DataTypes.STRING,
      // allowNull defaults to true
    },
    },
    {
    // Other model options go here
    },
);

// `sequelize.define` also returns the model
// console.log(studentModel === sequelize.models.student); // true

export default teacherModel;