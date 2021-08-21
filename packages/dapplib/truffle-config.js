require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy recipe noble modify imitate produce flip general'; 
let testAccounts = [
"0x4694678f6d0341e8dee1580f38892d082403a8d87bb1d950ed577f14d9f730d3",
"0xc6935e9e7437446bb692394e488fc981d4a63159641ea6ad7648db5dd1915347",
"0xd0e9cf985fe98b5de1a723676d43e83242daa53ca06686bd1ecf840bbc1792a8",
"0xef8faf86fd55f7b6ef5be4a5a6b016ee56d2eae766eceffd50f89933f2e9705a",
"0xa25bd2baded1c2783354ee816cbc3bab5fe6b8a628226283129bf60db878fa17",
"0xb77924e0755ecfe0f137f3d2235b1d929e2b2ebab18290eef0806de85953cc77",
"0x25f792430289efe878f630392c49af5c9b711f8afac3d382d2c4143de2b409df",
"0xc56d5eed46f1bd3c06b4b3526864dfd4897ddb6ae22f1e9a44d2aecc589647b3",
"0x11a6c96538fc09858ed80750c83ddfd0e41833b75c8aa037c172018ecf642c12",
"0x52ff78fcc0be5827e3d8c743f66e22f722e13dd759250a43df959105613a99bd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

