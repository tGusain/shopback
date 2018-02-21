'use strict';
var program = require('commander');
/*
  Controller file : This will control all the operations i.e redeem,signup,spend
*/
(() => {

  const action = process.argv[2];
  program
    .option('<action> <arg1> [<arg2>...]', 'This will give the correct result');
  program.parse(process.argv);

  try {
    require(`./${action}`)();
  } catch(e) {
    program.help();
    process.exit(1);
  }
})();
