// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken is ERC721 {
    uint256 NFTPrice = 0.01 Ether;

    constructor() ERC721("MyToken", "MTK") {}


    function safeMintNFT(address to, uint256 tokenId) public payable {
        _safeMint(to, tokenId);
    }
}