var Verifier = artifacts.require('Verifier');

contract('TestSquareVerifier', accounts => {

    const owner = accounts[0];
    //const account_one = accounts[0];
    //const account_two = accounts[1];

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

    // Test verification with correct proof
    it('correct proof verification test', async function () {
        let instance = await Verifier.deployed();
        result = await instance.verifyTx.call(proof.a, proof.b, proof.c, proof.inputs, {from: owner});
        assert.equal(result, true, "Proofing with correct proof Failed");
    })

    // Test verification with incorrect proof
    it('incorrect proof verification test', async function () {
        let instance = await Verifier.deployed();
        result = await instance.verifyTx.call(proof.a, proof.b, proof.c, [8, 0], {from: owner});
        assert.equal(result, false, "Proofing with incorrect proof Failed");
    })

})