const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "7a5a7921a1a14cba80774eac5636a7f3";
const mnemonic = "stereo decide cream scene pledge foster census busy alarm hidden gym fork";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};