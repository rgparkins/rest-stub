let express = require('express');
let router = express.Router();

router.get('/ping', (request, response) => {
    response.json({ reply: "pong"});
});

module.exports = router;
