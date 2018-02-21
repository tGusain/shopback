'use strict';
const program = require('commander');

const signupAlgo = (domain) => {
  const signupBonusMap = {
    'www.shopback.sg'      : '5.00 SGD',
    'www.shopback.my'      : '10.00 MYR',
    'www.shopback.co.id'   : '25.00 IDR',
    'www.shopback.com.tw'  : '1000.00 TWD',
    'www.myshopback.co.th' : '500.00 THB',
    'www.myshopback.com'   : '5.00 USD'
  };
  
  if(signupBonusMap[domain] != undefined) {
    console.log(`Award Bonus : ${signupBonusMap[domain]}`);
  } else {
    console.log("We do not handle this site");
  }
}

module.exports = () => {
  program
    .command('signup')
    .action(function(domain){
      signupAlgo(domain);
    });
  program.parse(process.argv);
};
