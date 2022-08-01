const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    response.json(
        {
            name: "Beach Life",
        },
    )
});

module.exports = router;