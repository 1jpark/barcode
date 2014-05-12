Barcode
----

#### Supported barcodes:
*  CODE128 (B)
*  EAN (13)
*  UPC-A
*  CODE39

```js
var url = require('url');
var http = require('http');
var create_barcode = require('../index');


http.createServer(function(req, res) {
    /*
        code128
        code39
        ean-13
        epc-a
    */
    create_barcode({barcode_type:"code39", text: "RVA123"}).then(function(png){
        res.writeHead(200, { 'Content-Type':'image/png' });
        res.end(png, 'binary');
    },function(err){
        res.writeHead(500);
        res.end(err);
    });

}).listen(3030);
```
