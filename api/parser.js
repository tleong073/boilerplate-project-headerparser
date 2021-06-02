const express = require('express');
const router = express.Router();

router.get('/whoami',(req,res) => {
    console.log( req);
    res.json({
        ipaddress: req.ip.slice(7),
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});

module.exports = router;