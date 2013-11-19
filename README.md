nodeAnalyzer
============

A project to integrate a C++ analyzer with a node server for GRIFFIN &amp; TIGRESS.
Initial code shamelessly ripped off from examples at
http://nodejs.org/api/addons.html
and
http://howtonode.org/hello-node

Open Connection Pointing at a Process
============
1.  Make yourself an executable called a.out that waits for input at stdin, and then prints something on stdout.  echo.c is proveded for this purpose.
2.  Start the server with: node openCxn
3.  visit the URL: http://localhost:8000/?input=40

And the URL should be posting the output to stdout from your executable.  a.out should launch and die with the server, and remain live regardless of client actions.

Hopefully this will be the most appropriate solution.  Previous attempts included before for posterity.


Single-Execution round trip
============
After installing node, the simplest (and probably most useful) example is in callAbin.js, which will take a URL command, run it on the command line on the server, and post whatever went to stdout back to the browser.  Make yourself a hello world called a.out, and start the server:

node callAbin.js

then visit the URL

http://localhost:8000/?command=a.out

with a.out replaced with your executable.  Output should appear in the bowser.

C++ wrapped in node
============

setup
============
In order to use/develop nodeAnalyzer with C++ wrapping, you'll need three things:

1. node: http://nodejs.org/
2. npm (node package manager): https://npmjs.org/
3. node-gyp: npm install -g node-gyp

use
============
The example C++ code lives in hello.cc.  Two methods called FirstMethod and SecondMethod are decalred, to show how to make a list of methods; binding.gyp contains the 'Makefile - like' directives for mashing these into the JavaScript.

To see it go, check the package out and in its root directory, do

node-gyp configure

node-gyp build

node hellowurld.js

Then go visit
http://localhost:8000/?fxn=hello&payload=wurld

to see the magics.
