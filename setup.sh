#!/bin/bash
type curl > /dev/null 2>&1 || { echo >&2 "curl is required but is not installed. Aborting."; exit 1; }

if type node > /dev/null 2>&1; then
    echo "Node is already installed. Proceeding..."
else
    echo "Installing node..."
    mkdir tmp
    cd tmp
    curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
    ./configure --prefix=~/local/
    make install
    curl -L https://www.npmjs.org/install.sh | sh
    cd ..
fi

PATH=$PATH:~/local/bin
npm install
node server.js