import Sequelize from 'sequelize';
import { sequelize } from '../../config/database.sequelize';
class School extends Sequelize.Model { }
School.init({
  schl_name: Sequelize.STRING,
  schl_type: Sequelize.STRING,
}, { sequelize, modelName: 'school' });

School.sync();
export { School }