var express = require('express');
var app = express();
var options = {'day' : 'numeric', 'month' : 'long', 'year' : 'numeric'};
app.get('/timestamp/:ts', function (req, res) {
    var date = new Date(req.params.ts * 1000);
    if (date.getTime()) {
        res.send({
                  'unix' : date.getTime(), 
                  'natural' : date.toLocaleDateString('en-US', options)
                });
  } else {
        res.send({'unix' : null, 'natural' : null});
  }
})

app.listen(8080, function () {
    console.log('Timestamp app now active on port 8080.')
})