  async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const token = await ethers.deployContract("CoffeeToken", {gas: ethers.parseEther("0.000001")});
    const lock = await ethers.deployContract("Lock", [unlockTime], {
      value: lockedAmount,
    });
  
    console.log("Token address:", await token.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });