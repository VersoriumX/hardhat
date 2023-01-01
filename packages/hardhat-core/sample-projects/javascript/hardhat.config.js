require("@nomicfoundation/hardhat-toolbox");
require("@alch/alchemy-web3");
require("@ethersproject/abi");
require("@metamask/eth-sig-util");
require("@nomicfoundation/ethereumjs-blockchain");
require("@nomicfoundation/ethereumjs-statemanager");
require("@nomicfoundation/ethereumjs-common");
require("@nomicfoundation/ethereumjs-tx");
require("axios");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  defaultnetwork: "hardhat",
networks:{
  hardhat:{
    chainid: 31337,
    forking:{
      url:"https://eth-mainnet.g.alchemy.com/v2/SsOT5chlSIhMQGtwdJizJLYpZbCqpBWf"
    },
  },
}
};
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "SsOT5chlSIhMQGtwdJizJLYpZbCqpBWf",
    network: Network.ETH_MAINNET,
};