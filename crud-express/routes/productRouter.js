
const express = require('express');
const router = express.Router();
const {CreateTask, getData, getById, updateTask} = require('../controllers/productData.js')

router.get('/data',getData)
router.get('/data/:id',getById)
router.post('/create', CreateTask);
router.put('/update/:id', updateTask)

module.exports = router;