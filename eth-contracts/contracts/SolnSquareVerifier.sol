pragma solidity ^0.5.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is BhattaraiToken {
    constructor(address verifierAddress) public {
        verifier = Verifier(verifierAddress);
    }

    Verifier private verifier;
    // TODO define a solutions struct that can hold an index & an address
    struct solutions {
        uint256 index;
        address Address;
    }
    // TODO define an array of the above struct
    solutions[] private sol;
    // Solutions array counter
    uint256 counter = 0;
    // TODO define a mapping to store unique solutions submitted
    mapping(address => solutions) private store;
    // TODO Create an event to emit when a solution is added
    event Added(uint256 solutionsIndex, address solutionsAdd);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 recievedIndex, address recievedAddress)
        public
        returns (bool)
    {
        //sol[counter] = solutions(recievedIndex, recievedAddress);
        sol.push(solutions(recievedIndex, recievedAddress));
        store[msg.sender] = solutions(recievedIndex, recievedAddress);
        counter++;
        emit Added(recievedIndex, recievedAddress);
        return true;
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function newMint(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input,
        uint256 tokenId
    ) public returns (bool) {
        require(
            store[msg.sender].Address == address(0),
            "The solution is not unique"
        );
        require(verifier.verifyTx(a, b, c, input), "Verification failed");
        addSolution(tokenId, msg.sender);
        super._mint(msg.sender, tokenId);
        return true;
    }
}
