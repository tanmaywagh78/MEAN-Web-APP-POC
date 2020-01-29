import express from 'express';
import { SportController } from '../controllers/sport.controller';
// import * as SportMongoController from '../controllers/mongooseIO/sport.mongo.controller';
import { SchoolController } from '../controllers/school.controller';
const router = express.Router();
router.post('/addsport', SportController.addSport);
router.get('/listsport', SportController.listSport);
router.post('addschool', SchoolController.addSchool);
router.get('listschool', SchoolController.listSchool);
//Mongoose API
// router.post('/sport', SportMongoController.addSport);
// router.get('/sports', SportMongoController.allSportsM);
// router.get("/sport/:id", SportMongoController.getSportM);
// router.put("/sport/:id", SportMongoController.updateSportM);
// router.delete("/sport/:id", SportMongoController.deleteSportM);
export default router;