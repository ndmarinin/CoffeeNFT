const { expect } = require("chai");

describe('CoffeeNFTtest', function() {
    let coffeeTokenAddress;
    let coffeeToken;
    let acc0, acc1, acc2, acc3, acc4, acc5;

    before(async () => {
        const CoffeeToken = await ethers.getContractFactory("CoffeeToken");
        coffeeToken = await CoffeeToken.deploy();
        coffeeTokenAddress = await coffeeToken.getAddress();
        [acc0, acc1, acc2, acc3, acc4, acc5] = await ethers.getSigners();
        
    });

    it("Should minting NFT", async function() {
        await coffeeToken.connect(acc0).safeMintNFT(
            acc1.address,
            1,
            { value: ethers.parseEther("0.01") }
        );
        expect(await coffeeToken.balanceOf(acc1.address)).to.equal(1);
    });
});