const { BN } = require('@openzeppelin/test-helpers');

module.exports = async function (done) {
    // await deployer.deploy(LPToken)
    try {
        const token = await CoffeeToken.at("0xAB71040C855be4d9a61b64136a2d4097B504100e")
        console.log("token:", token.address)
        let amount = new BN(1000000).mul(new BN(10).pow(new BN(18)))
        await token.mint(process.env.OWNER, amount)
    } catch (err) {
        console.log(err)
    }
    done()
};