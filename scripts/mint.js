require('dotenv').config({path: '../eth-contracts/.env'})
const HDWalletProvider = require('@truffle/hdwallet-provider')
const zokratesProof = [
    require("../zokrates/code/square/proof.json"),
]

const web3 = require('web3')
const MINT_COUNT = 10
const infuraKey = process.env.INFURA_KEY
const mnemonic = process.env.SECRET
const OWNER_ADDRESS = process.env.OWNER_ADDRESS
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const contractJson = require('../eth-contracts/build/contracts/SolnSquareVerifier.json')

async function main() {
    console.log(infuraKey, mnemonic)
    console.log(require('dotenv'))
    const provider = new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/ws/v3/e532be78a4034d2d8ab8128f189f422d`)
    const web3Instance = new web3(provider)
    console.log(contractJson.abi);
    // const contract = await new web3Instance.eth.Contract(contractJson.abi, CONTRACT_ADDRESS, {gasLimit: "1000000"})
    // for (let idx = 0; idx < MINT_COUNT; idx++) {
    //     try {
    //         let proof = zokratesProof[idx].proof
    //         let input = zokratesProof[idx].input
    //         console.log("OWNER_ADDRESS " + OWNER_ADDRESS + "\n")
    //         console.log("index " + idx + "\n")
    //         console.log("proof " + JSON.stringify(proof) + "\n")
    //         console.log("input " + input + "\n")
    //         // let tx = await contract.methods.addSolution(
    //         //     OWNER_ADDRESS,
    //         //     idx,
    //         //     proof.A,
    //         //     proof.A_p,
    //         //     proof.B,
    //         //     proof.B_p,
    //         //     proof.C,
    //         //     proof.C_p,
    //         //     proof.H,
    //         //     proof.K,
    //         //     input
    //         // ).send({from: OWNER_ADDRESS})
    //         // console.log("Solution added. Transaction: " + tx.transactionHash)
    //         // tx = await contract.methods.mint(OWNER_ADDRESS, idx).send({from: OWNER_ADDRESS})
    //         // console.log("Minted item. Transaction: " + tx.transactionHash)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
}

main()