import Sequelize from 'sequelize';
import { sequelize } from '../../config/database.sequelize';
class Sport extends Sequelize.Model { }
Sport.init({
  s_name: Sequelize.STRING,
  s_desc: Sequelize.STRING,
  s_type: Sequelize.STRING,
}, { sequelize, modelName: 'sport' });

Sport.sync();
export { Sport }