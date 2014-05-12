var gm =  require('gm').subClass({ imageMagick: true }),
    images = __dirname + '/imgs/',
    fonts = __dirname + '/fonts/',
    Promise = require('promise');

var original = images + 'original.png',
    barcode_types = ["code128.ttf", "code39.ttf", "ean-13.ttf", "epc-a.ttf"];


module.exports = function(opt){
    return new Promise(function (resolve, reject){
        var barcode_type;
        barcode_types.forEach(function(it_barcode, i){
            if(it_barcode.indexOf(opt.barcode_type) >= 0){
                barcode_type = fonts + barcode_types[i];
            }
        });

        if(!barcode_type) return reject("unsupported barcode type");

        gm(original)
            .font(barcode_type, 80)
            .drawText(0, 0, opt.text, "center")
            .toBuffer(function (err, buffer) {
                if (err) return reject(err);
                resolve(buffer);
            });
    });
}
