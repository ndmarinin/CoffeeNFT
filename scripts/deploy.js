async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const CoffeeToken = await ethers.getContractFactory("CoffeeToken");
  const coffeeToken = await CoffeeToken.deploy();
  console.log("Token address:", await coffeeToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });