const express = require("express");
const { sendData, updateData, deleteData } = require('../controllers/productController')
const router = express.Router();
router.post('/add',sendData);
router.route('/update/:id').put(updateData)
router.route('/delete/:id').delete(deleteData)

module.exports = router;
