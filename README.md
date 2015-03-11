# ecmascript6-presentation

See the keynote file or the pdf file for the presentation. There are two
versions of the pdf, one is with presenter notes.

Various examples are in the tests folder. Run them with node with

babel --experimental foo.js  | node

You can also define the following function

function mybabel{babel --experimental $1 | node }

then run the js functions via

mybabel foo.js
