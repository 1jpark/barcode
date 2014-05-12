var url = require('url');
var http = require('http');
var create_barcode = require('../index');


http.createServer(function(req, res) {

    create_barcode({barcode_type:"code39", text: "RVA123"}).then(function(png){
    	res.writeHead(200, { 'Content-Type':'image/png' });
    	res.end(png, 'binary');
    },function(err){
        res.writeHead(500);
        res.end(err);
    });

}).listen(3030);
