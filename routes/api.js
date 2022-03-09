const express = require('express');
const router = express.Router();

router.get('/data', async function(req, res, next) {
    try {
        let x = 5;
        let y = 6;
        res.status(200).json({data: x+y});
    } catch (err) {
        res.status(err.statusCode || 500).json({'message': err.message});
    }
});

module.exports = router;
