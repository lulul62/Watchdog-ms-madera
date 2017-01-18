var express = require('express');
var router = express.Router();
var request = require('request');

/**
 * Récupere l'etat des micro-services des applications de madera à travers les routes du watchdogs
 */

router.get('/', function (req, res) {

    function getAllStatus() {

        console.log("Récuperation de l'état de santé des micro-services");
        request('http://localhost:3000/devis', function (body, response) {
            var msDevisStatus = response.body;
            request('http://localhost:3000/finance', function (body, response) {
                var msFinanceStatus = response.body;
                request('http://localhost:3000/conception', function (body, response) {
                    var msConceptionStatus = response.body;
                    request('http://localhost:3000/configuration', function (body, response) {
                        var msConfigurationStatus = response.body;
                         res.render('index', {
                            title: 'Madera-Watchdog-ms',
                            msDevis: msDevisStatus,
                            msFinance: msFinanceStatus,
                            msConception: msConceptionStatus,
                            msConfiguration: msConfigurationStatus
                        });
                    });
                });
            });

        });

    }

   return getAllStatus();

});

module.exports = router;
