const createEVMWalletCsv = require('create-evm-wallets-csv');

createEVMWalletCsv({
  number: 10,
  path: './.env/wallet.csv',
});
