let express = require('express');
let router = express.Router();
let resourceHelper = require('../lib/resourceMapper');

router.get('*', (request, response) => {
    resourceHelper.handleRequest(request, response);
});

module.exports = router;
