var express = require('express');
var request = require('request');
var router = express.Router();


/**
 * Appel de MS-FINANCE pour checker si son état est actif, puis stream la response dans cette route
 */

router.get('/', function (req, res) {
    request('http://localhost:1337/devis', function (error, response) {
        if (!error && response.statusCode == 200) {
            res.json({statusCode: response.statusCode, healthcheck: "OK"});
        }
        else {
            res.json({statusCode: "500", healthcheck: "KO"});
        }
    })
});

module.exports = router;

