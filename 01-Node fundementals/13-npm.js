'use strict';

//*if you already got a package-Json without node_modules => 'npm install'

//*npm - global command (comes with node install)

//*npm -- version  

//* local dependency - use it only in the particular project:

//*npm i <packageName>

//* global dependency - use it in any project:
//* npm install -g <packageName>

//*package.json - manifest file (stores important info about project/package)
//* manual approach (create package.json in the root, create properties etc)
//* npm init (step by step, press enter skip)
//*npm init -y (everything default)

console.log('NodeJS app is running');
const {http,server,port} = require('./12-http');
const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello World');

//* NPM is a package manager used to install, delete, and update Javascript packages on your machine. NPX is a package executer, and it is used to execute javascript packages directly, without installing them