require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { API_URL, API_MAIN_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    siberium_main:{
      url: API_MAIN_URL,
      accoutns: [PRIVATE_KEY]
    },
    siberium_test: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
