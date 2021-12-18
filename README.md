# Real Estate Marketplace

## Installation

To install, download or clone the repo, then:

```bash
npm install
cd eth-contracts
truffle compile
```

## Test smart contracts

Open a terminal and run this command:

```bash
ganache-cli
```

Open a second terminal and execute:

```bash
truffle test
```

## ZoKrates

This repository already contains 10 pre-generated proofs that I have used to mint 10 tokens. In case you require more you can do it following next steps:

- Step 1: Install and execute Docker
- Step 2: Run ZoKrates

  ```
  docker run -v <path-to-your-project>/zokrates/code>:/home/zokrates/code -ti zokrates/zokrates /bin/bash
  ```

  Change into the square directory

  ```
  cd code/square/
  ```

- Step 3: Compile the program written in ZoKrates DSL

  ```
  ~/zokrates compile -i square.code
  ```

- Step 4: Generate the trusted setup

  ```
  ~/zokrates setup
  ```

- Step 5: Compute witness

  ```
  ~/zokrates compute-witness -a 3 9
  ```

- Step 6: Generate proof

  ```
  ~/zokrates generate-proof
  ```

- Step 7: Export verifier
  ```
  ~/zokrates export-verifier
  ```

## Deployment to Rinkeby

Edit the file eth-contracts/.env with the required property values, then open a terminal and execute the next commands:

```bash
cd eth-contracts
truffle migrate --reset --network rinkeby
```

## Deployed smart contracts

My smart contracts have the following addresses:

| Contract             | Address                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| _Migration_          | [0x0C1a8208e5537eD3fFA8259508c05e5c7Bd73845][https://rinkeby.etherscan.io/address/0x0c1a8208e5537ed3ffa8259508c05e5c7bd73845] |
| _Verifier_           | [0xF4E839246451ef9315068F2AeAEF41203D09Ab09](https://rinkeby.etherscan.io/address/0xf4e839246451ef9315068f2aeaef41203d09ab09) |
| _SolnSquareVerifier_ | [0x624b3665Dd5a643FE597BA30C5aA7187deeD0541](https://rinkeby.etherscan.io/address/0x624b3665Dd5a643FE597BA30C5aA7187deeD0541) |

SolnSquareVerifier contract ABI:

```
 [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "verifierAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "solutionsIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "solutionsAdd",
          "type": "address"
        }
      ],
      "name": "Added",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "ownerShipTransfered",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bool",
          "name": "paused",
          "type": "bool"
        }
      ],
      "name": "setPaused",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "recievedIndex",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recievedAddress",
          "type": "address"
        }
      ],
      "name": "addSolution",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "newMint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
```

## Mint Tokens

Token ID 3
[Link](https://rinkeby.etherscan.io/tx/0x2a550f21fa169b62d977f5ae48285b50a820cdab315e0b9d4daeb81071bdf8b8)
Token ID 4
[Link](https://rinkeby.etherscan.io/tx/0xff0e634a52fbb60f4e239b25cd1981e097b9695f1748d46f63c56e88cb42d9ea)
Token ID 5
[Link](https://rinkeby.etherscan.io/tx/0x4905f0207028b345300bbcb70dd750cc0475c87bdf54a496653645b379f1cdf9)
Token ID 6
[Link](https://rinkeby.etherscan.io/tx/0xdd6714cf69ed65c3a3f9fd8f99904a5e7b99af272f551fd2a05a3e8b6a4c6de3)
Token ID 7
[Link](https://rinkeby.etherscan.io/tx/0x3cdd07d0e07d4641e0dda6746568c901327de2a534d50b260a9728f53aeac9b5)
Token ID 8
[Link](https://rinkeby.etherscan.io/tx/0x05aee75d52102ca4d0bb693e3fe4324a40e9391a0fcd51d04873e1ba5b47e1f4)
Token ID 9
[Link](https://rinkeby.etherscan.io/tx/0xf8fad2546ed2c9d74b1b00d5424ccbd6f14ab5009f9d0a6f2e82eecb304ba559)
Token ID 10
[Link](https://rinkeby.etherscan.io/tx/0xc80a8c9875c5f8e56c56c84b08f49bf797d0b7628325a4b3c620229b78b455d7)
Token ID 11
[Link](https://rinkeby.etherscan.io/tx/0x5b82b22877693d5aa131b46a89408f25a60dda6b2299f0090fa6a01b88c0bbd4)
Token ID 12
[Link](https://rinkeby.etherscan.io/tx/0x85dd5b8f678129d488fcfefc666bf230a9aab76d073b5dc8a6cd1530b6dcf48b)
Token ID 13
[Link](https://rinkeby.etherscan.io/tx/0x535d89a17d7b59f3af0c4f8202a3d97943d840ef2b7907099e1bc2d6ad955747)

## OpenSea Details

My Marketplace: [Link](https://testnets.opensea.io/collection/bhattarai-realestate-token)

## OpenSea Toekns

Purchase transactions:

- [0xee91650ab5d61b3934a44956ca7efb763a3c150fb6d1f54eea2a13a41f41835c](https://rinkeby.etherscan.io/tx/0xee91650ab5d61b3934a44956ca7efb763a3c150fb6d1f54eea2a13a41f41835c)
- [0x0c52d1ebab4fecd04f3edb5c3c48503ee5e0688067972592434fdae40529f605](https://rinkeby.etherscan.io/tx/0x0c52d1ebab4fecd04f3edb5c3c48503ee5e0688067972592434fdae40529f605)
- [0x90d214c3a63c9274f01038d00620a8319cf13f1ad2d27cba9000b4c59f1a97f1](https://rinkeby.etherscan.io/tx/0x90d214c3a63c9274f01038d00620a8319cf13f1ad2d27cba9000b4c59f1a97f1)
- [0xd396f851932f8782d654251e9d2e416b7454bff60b06e68f698d7b8fc8fbd636](https://rinkeby.etherscan.io/tx/0xd396f851932f8782d654251e9d2e416b7454bff60b06e68f698d7b8fc8fbd636)
- [0x78241656486e1bf6b008ad9031bc6149eebee727e16c350e908b0dab73fe85de](https://rinkeby.etherscan.io/tx/0x78241656486e1bf6b008ad9031bc6149eebee727e16c350e908b0dab73fe85de)

purchaser's address: [0x345434c69B373476e9919E7e21F125e51d19fF68](https://rinkeby.etherscan.io/address/0x345434c69B373476e9919E7e21F125e51d19fF68)
