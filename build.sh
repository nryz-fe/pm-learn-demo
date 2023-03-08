#!/bin/bash
set -eu

TAG=pm-learn-demo:production

printf "==========del legacy images==========\n"
docker rmi -f $TAG 2>/dev/null

printf "==========start build images==========\n"

docker build --pull -t $TAG -f Dockerfile .

printf "==========del legacy container==========\n"
docker rm -f pm-learn-demo 2>/dev/null

printf "==========run new container==========\n"
docker run --name pm-learn-demo --restart=always -d -p 1314:80 $TAG
