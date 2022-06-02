const express = require('express');
const myHelper = require('..routes/util/helper')

const router = express.Router();

router.get('/test-me', function (req, res) {
   myHelper.printDate()
   myHelper.getCurrentMonth()
   myHelper.getCohortData()
   let firstElement = underscore.first(['sabina','aakash','pritesh'])
   console.log('the first element received from underscore function is'+firstElement)
   res.send('this is my 1st api')
});



module.exports = router;
// adding this comment for no reason