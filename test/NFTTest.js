const { expect } = require("chai");

describe('CoffeeNFTtest', function() {
    let CoffeeToken;
    let coffeeTokenAddress;

    before(async () => {
        const CoffeeToken = await ethers.getContractFactory("CoffeeToken");
        const coffeeToken = await CoffeeToken.deploy();
        await coffeeToken.deployed();
        coffeeTokenAddress = coffeeToken.address;
    });

    it("Should minting NFT", async function() {
        await ecLibraryTest.mul('0x1');
        const xCoordinate = await ecLibraryTest.hx();
        const yCoordinate = await ecLibraryTest.hy();

        const expectedX = '0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798';
        const expectedY = '0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8';

        expect(xCoordinate).to.equal(expectedX);
        expect(yCoordinate).to.equal(expectedY);
    });

    it("Scalar Multiplication: 5G with Buterin trick", async function() {
        await ecLibraryTest.ecMulV(
            Gx,
            Gy,
            '0x5',
            '0x2F8BDE4D1A07209355B4A7250A5C5128E88B84BDDC619AB7CBA8D569B240EFE4',
            '0xD8AC222636E5E3D6D4DBA9DDA6C9C426F788271BAB0D6840DCA87D3AA6AC62D6'
        );
        const success = await ecLibraryTest.equality();
        expect(success).to.equal(true);
    });
});