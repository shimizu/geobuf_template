 #!/bin/sh

 
 toposimplify -S 0.1 -F  $1.topo > $1_s.topo
 topo2geo $1.geojson < $1_s.topo
 node ../../json2buf.js $1.geojson
 rm $1_s.topo
 rm $1.geojson