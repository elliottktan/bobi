import express from 'express';
import {test, test2} from '../controllers/usersController';
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json([{
  	id: 1,
  	username: "elliottktan"
  }]);
});

router.get('/test', (req, res, next) => {
  res.send(test());
});

module.exports = router;
