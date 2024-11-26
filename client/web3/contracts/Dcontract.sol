// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dcontract {
    //struct is basically an object equivalence in js

    struct NFT {
        address owner;
        string title;
        string description;
        uint256 cost;
        string image;
        uint256 purchasecount;
        address[] buyers;
        uint256 volume;

    }

    mapping(uint256 => NFT) public NFTS; // mapping should be explicitly mentioned to access similar to an array in js

    uint256 public tnfts = 0; // Total no of nfts

    function createTokens(address _owner, string memory _title, string memory _description, uint256 _cost, string memory _image) public returns (uint256) {
        NFT storage token = NFTS[tnfts];

        token.owner = _owner;
        token.title = _title;
        token.description = _description;
        token.cost = _cost;
        token.image = _image;
        token.purchasecount = 0;
        tnfts++;

        return tnfts-1;
         
    }

    function buyTokens (uint256 _id) public payable {
        uint256 amount = msg.value;

        NFT storage btoken = NFTS[_id];

        (bool sent,) = payable(btoken.owner).call{value: amount}("");

        if(sent){
            btoken.purchasecount += 1;
            btoken.buyers.push(msg.sender);
            btoken.volume = btoken.volume + amount;
         }
    }

    function getAllTokens() view public returns (NFT[] memory){
        NFT[] memory alltokens = new NFT[](tnfts);
        for (uint i = 0 ; i < tnfts; i++){
         NFT storage item = NFTS[i];
          alltokens[i] = item;
        }
        return alltokens;
    }

}