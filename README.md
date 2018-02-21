# shopback
The application has an extensible interface where for adding a new action we just need to add a new file 
and no changes to existing codebase.

The code is modular. Currently divided into following modules : 
1. shopback-calculator.js
This is the controller file which controls all action
2. redeem - Direct user to visit corresponding websites
3. spend - Return cashback awarded rounded to 2 decimal places
4. signup - Award corresponding bonus amount with currency for each of.

Every file is further made modular by having a different function for algoritm and a driving function.

How to run 
node shopback-calculator.js --help will give the help.

