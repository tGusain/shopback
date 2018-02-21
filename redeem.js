'use strict';
const program = require('commander');
const redeemAlgo = (domain) => {
  const domainMap  = {
    "www.shopback.sg" : true,
    "www.shopback.my" : true,
    "www.shopback.co.id" : true,
    "www.shopback.com.tw" : true,
    "www.myshopback.co.th" : true,
    "www.shopback.com" : true
  }
  if (domainMap[domain]) {
    console.log(`Visit https://${domain} to start earning cashback!`);
  } else {
    console.log("Invalid domain");
  }
 }
  module.exports = () => {
    program
      .command('redeem')
      .action(function(domain){
        redeemAlgo(domain);
      });
    program.parse(process.argv);
  };
