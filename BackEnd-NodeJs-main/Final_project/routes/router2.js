const express = require('express'),
    router2  = express.Router()
    feadbackController = require('../controllers/feadback.controller');



module.exports = router2;
router.post('/storeFeadback' , feadbackController.storefeadback);