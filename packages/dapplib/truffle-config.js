require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind huge hidden prize orange genuine'; 
let testAccounts = [
"0x05ec829270d9058efbe5248c0d46f5270bc8c4cca6315eb055923668d4629bbb",
"0xb50d5734bef7c1564b7012081abd64452902eec7e7c12ba0ebd0a4d03d8ec779",
"0x74ff9b01d24b87649ed3389f4d04e243f6a286d2c23fee4e15a09f4c89cbdce0",
"0xc8e2e6d148249978a6e6f3181f58f97aa9800cf0d7f1436970cb80f5c17a2fac",
"0x6ac47ddf3f2fe934f8665aa6c10fb889d5a31fdf586cd815c68e45e3ee3bf7a4",
"0x632a834817d2ff86f1c4a39abd5e17e9e702a3152d5f29887f865fbecc21ad1f",
"0x77dc8caf521b8e753980eee56026ff621ac6b03ab692b01cb71989aab8852e29",
"0x439fb29d033d95b5c1b14afc5f1f2b9c79ac60c5b9ce4e4c9025c22396de810e",
"0x75a50b7266440decb079ae9403c2fe69006e86071a66bf105ee6b32e9a3fbd19",
"0x5f1f640802b93328571327447bcfa8f420f8d097cdf1a29ac1dba76b00107bc6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
