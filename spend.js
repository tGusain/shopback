'use strict';

const program = require('commander');
const _ = require('lodash');


const spendAlgo = (amounts) => {
  let min = amounts[0];
  let max = amounts[0];
  let cashback;
  let invalidFlag = false;
  _.forEach(amounts,function(amount) {
    if(!(Number(amount))) {
      console.log('Invalid parameter passed. Amount should be number');
      invalidFlag = true;
      return false;
    }
    if(Number(amount) < min) {
      min = amount;
    }
    if(Number(amount) > max) {
      max = amount;
    }
    if(min>=50) {
      cashback = 20*max/100;
    } else if(min>=20) {
      cashback = 15*max/100;
    } else if(min>=10) {
      cashback = 10*max/100;
    } else {
      cashback=5*max/100;
    }
  });

  if(!invalidFlag && Number(cashback)>0) {
    console.log(`Award Cashback : ${cashback.toFixed(2)}`);
  } else {
    console.log(`Award Cashback : 0`);
  }
}

module.exports = () => {
  program
    .command('spend [amounts...]')
    .action(function(amounts){
      spendAlgo(amounts);
    });
  program.parse(process.argv);
};
