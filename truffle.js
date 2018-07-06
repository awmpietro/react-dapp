//HDWalletProvider is necessary to deploy using Infura <infura.io>
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "keep monster invite signing service presentation gun angle limb keep tent open mistake media improve";

module.exports = {
  networks: {
    //This will deploy contracts in Mainnet using Infura as provider <truffle migrate --network mainnet>
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/<YOUR_INFURA_API_KEY>")
      },
      network_id: 1
    },
    //This will deploy contracts in Ropsten using Infura as provider <truffle migrate --network ropsten>
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/<YOUR_INFURA_API_KEY>")
      },
      network_id: 3
    },
    //This will deploy contracts in Ropsten using Infura as provider <truffle migrate --network rinkeby>
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/<YOUR_INFURA_API_KEY>")
      },
      network_id: 4
    } 
  }
};
/**
 * Warning: In production, we highly recommend storing the mnemonic in another (secret) file, 
 * to reduce the risk of the mnemonic becoming known. 
 * If someone knows your mnemonic, they have all of your addresses and private keys!
 */