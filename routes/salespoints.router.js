const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const salespointController = require('../controllers/salespoints.controller');

const router = express.Router();

router.get('', (req, res) => {
    const { size } = req.query;
    salespointController.getSalespoints(size)
      .then( salespoints => {
        response(res, {code: 200, key: "salespoints", payload: salespoints})
      })
      .catch(error => {
        log.logError(error.logS);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
});

router.get('/:id', (req, res) =>{
    const { id } = req.params;
    salespointController.getSalespoint(id)
      .then( salespoint => {
        response(res, {code: 200, key: "salespoint", payload: salespoint})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
});
  
router.post('', (req, res) => {
    const { body } = req;
    salespointController.postSalespoint(body)
      .then( result => {
        response(res, { code: result.code, key: "message", payload: result.message});
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
});
  
router.put('/:salespointID', (req, res) => {
    const { salespointID } = req.params;
    const { body } = req;
    salespointController.putSalespoint(salespointID, body)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
});
  
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    salespointController.deleteSalespoint(id)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      })
});


module.exports = router;