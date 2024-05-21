import { Sequelize } from 'sequelize'; //here we import sequelize which is an ORM (object relation mapping)

const dbName= process.env.DB_NAME;
const dbUserName= process.env.DB_USERNAME;
const dbPassword= process.env.DB_PASSWORD;
const dbHost= process.env.DB_HOST;

// console.log("Password: ", dbPassword);
const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {  
    host: dbHost,
    dialect: 'postgres',
    logging: console.log
});

const connectDB = async() => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } 
catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}

export {connectDB};
export default sequelize;