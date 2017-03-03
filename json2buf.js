var fs = require("fs")

var Pbf = require("pbf")
var geobuf = require("geobuf")
var path = require("path")

var target = process.argv[2]
var extent = path.extname(target)
var output = target.replace(extent, ".buf")

console.log(target)


fs.readFile(target, 'utf-8', function (err, geojson) {
    if (err) {
        console.log(err);
    }
    else {
      convert(geojson)
    }
})


function convert(geojson) {
    var json = JSON.parse(geojson)
    var buffer = Buffer.from(geobuf.encode(json, new Pbf()));
    
    fs.writeFile(output, buffer,function(err){
       if(err) throw err;
       console.log("書き込み完了");
    })
}

function decode(buffer) {
    var json = geobuf.decode(new Pbf(buffer))
    console.log(json)    
}
