nodeAnalyzer
============

A project to integrate a C++ analyzer with a node server for GRIFFIN &amp; TIGRESS.
Initial code shamelessly ripped off from examples at
http://nodejs.org/api/addons.html
and
http://howtonode.org/hello-node

setup
============
In order to use/develop nodeAnalyzer, you'll need three things:

1. node: http://nodejs.org/
2. npm (node package manager): https://npmjs.org/
3. node-gyp: npm install -g node-gyp

use
============
The example C++ code lives in hello.cc.  A single method called Method is decalred, which just returns its first argument.

To see it go, check the package out and in its root directory, do

node-gyp configure
node-gyp build
node hellowurld.js

Then go visit
http://localhost:8000/?fxn=hello&payload=wurld

to see the magics.
