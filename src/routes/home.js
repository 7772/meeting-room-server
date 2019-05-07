
import express from 'express';
import HomeController from '../controllers/api/V1/HomeController';

const router = express.Router();


router.get('/', HomeController.index);

module.exports = router;