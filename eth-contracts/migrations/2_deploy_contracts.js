// migrating the appropriate contracts
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");
var verifier = artifacts.require("verifier.sol");
module.exports = function (deployer) {
  deployer.deploy(verifier)
    .then(() => {
      return deployer.deploy(SolnSquareVerifier, verifier.address);
    })
};
