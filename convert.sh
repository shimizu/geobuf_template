#!/bin/sh

geojson-precision -p 4 $1 $1.prec
cat $1.prec | simplify-geojson -t 0.0005 > $1.simp
node json2buf.js $1.simp