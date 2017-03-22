#!/bin/sh

geojson-precision -p 4 $1 $1.prec
cat $1.prec | simplify-geojson -t 0.0001 > $1.simp
node json2buf.js $1.simp
rm -f $1.prec
rm -f $1.simp