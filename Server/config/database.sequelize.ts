import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('isc2', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }    
});
export { sequelize }


