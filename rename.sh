#!/bin/bash
echo "this script is to rename picture"

for names in ./src/imgs/*
do
    echo "$i"
    news=$i
    echo "$news"
    mv $names ./src/imgs/$news.png
    let i=i+1
done