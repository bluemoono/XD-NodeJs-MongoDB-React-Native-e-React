const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleware/TaskValidation');
const MacaddressValidation = require('../middleware/MacaddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);

router.get('/filter/all', MacaddressValidation, TaskController.all);
router.get('/:id', TaskController.show);

module.exports = router;