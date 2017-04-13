const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/genfile', (req, res) => {
    var data = req.body;
    var str = 'input: ';
    data.values.forEach(values => {
        values.forEach(value => {
            if(value.selected === true) {
                str += 1;
            } else {
                str += 0;
            }
        });
    });
    str += ` expected: ${data.number}`;
    fs.writeFile('output.txt', str, (err) => {
        if(err) {
            res.status(405);
            res.send({message: `Unable to generate file error: ${err}`});
        } else {
            res.status(200);
            res.send({message: `File: /output.txt generated in ${global.path}`});
        }
    });
});

exports = module.exports = router;