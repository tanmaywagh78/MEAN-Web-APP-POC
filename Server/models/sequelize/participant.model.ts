import Sequelize from 'sequelize';
import { sequelize } from '../../config/database.sequelize';
import { Sport } from './sport.model';
import { School } from './school.model';
class Participant extends Sequelize.Model { }
Participant.init({
  p_name: Sequelize.STRING,
  p_standard: Sequelize.INTEGER,
}, { sequelize, modelName: 'participant' });

Participant.belongsTo(Sport);
Participant.belongsTo(School);
Participant.sync();
export { Participant }