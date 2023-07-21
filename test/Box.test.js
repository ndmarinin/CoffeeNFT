// test/Box.test.js
// Load dependencies
const { expect } = require('chai');

// Start test block
describe('CoffeeToken', function () {
  before(async function () {
    this.CoffeeToken = await ethers.getContractFactory('CoffeeToken');
  });

  beforeEach(async function () {
    this.coffeeToken = await this.CoffeeToken.deploy();
    await this.coffeeToken.deployed();
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.coffeeToken.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.coffeeToken.retrieve()).toString()).to.equal('42');
  });
});