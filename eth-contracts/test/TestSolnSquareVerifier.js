var ERC721MintableComplete = artifacts.require('BhattaraiToken');
var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
contract('TestSolnSquareVerifier', accounts => {

    const owner = accounts[0];

    // - use the contents from proof.json generated from zokrates steps
    let proof = {
        a: [
            "0x290e7638e9922a226f4e4e28a6f47b63e96b506d56225c706cfbd046d184e0e7",
            "0x0ecea3c417d14fcfe7d7658f89602c4bb755222a3e7710a862fcec4c8af636ca"
        ],
        b: [
            [
                "0x2e690f71b1b02a103929bf34237c756f7f9aec5e625e2b345c268abddc176fb8",
                "0x193638e7ef553b33981bff81a725ebbcbb19bbaaf5131bc2b50acdb79f344600"
            ],
            [
                "0x2e0bac731011ff3a0779b48550e5aa78c9ecaf99cd3a671b4323778725b6ce19",
                "0x09b877cb660953fcc2db97cad83bee79bee0be601d6830501608cb5803b5d490"
            ]
        ],
        c: [
            "0x0d1c38834b90b53f3396cc445b4573de75ba95522aefcf4e38d50df8ec82bb20",
            "0x26cc9a96d1136e92e8c1b6b9c7ae7c584c6d1ce17d7ab9b484f15ea0eb635e63"
        ],
        inputs: [
            "0x0000000000000000000000000000000000000000000000000000000000000009",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    }

    // Before for each
    beforeEach('setup environment', async function () {
        this.ERC721 = await ERC721MintableComplete.new({from: owner});
        this.verifier = await SquareVerifier.new(owner);
        this.contract = await SolnSquareVerifier.new(this.verifier.address);
    })

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('New solution can be added for contract', async function () {
        //let instance = await SolnSquareVerifier.deployed();
        let result = await this.contract.addSolution.call(1, owner, {from: owner});
        assert.equal(result, true, "Add solutions Failed");
    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('ERC721 token can be minted for contract', async function () {
        //let instance = await SolnSquareVerifier.deployed();
        let result = await this.contract.newMint.call(proof.a, proof.b, proof.c, proof.inputs, 2, {from: owner});
        assert.equal(result, true, "token minted Failed");
    })
})