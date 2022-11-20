// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// ████████╗███████╗██████╗ ██████╗  ██████╗ 
// ╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔═══██╗
//    ██║   █████╗  ██████╔╝██████╔╝██║   ██║
//    ██║   ██╔══╝  ██╔══██╗██╔══██╗██║   ██║
//    ██║   ███████╗██████╔╝██████╔╝╚██████╔╝
//    ╚═╝   ╚══════╝╚═════╝ ╚═════╝  ╚═════╝ 
                                          
//     ************ MINTED **************
//    FEVM Filecoin / Ethonline Hackathon
//  ERC1155 Minting contract. tebbouk@gmail.com


import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Minted is ERC1155, Ownable, ERC1155Supply {


    uint256 public cost = 0.3 ether;
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIdCounter;
    mapping (uint256 => string) private _uris;


    constructor() ERC1155("") {}


    function uri(uint256 tokenId) override public view returns (string memory){
        return(_uris[tokenId]);
    }

    function _ownerOf(uint256 tokenId) internal view returns (bool) {
        return balanceOf(msg.sender, tokenId) != 0;
    }

    function setCost(uint256 _cost) public {
        cost = _cost;
    }

    function mint(uint256 amount, string memory setUri) payable virtual public {
        require(msg.value >= (amount * cost), "Not enough ether sent");
        uint256 tokenId = _tokenIdCounter.current();
        _mint(msg.sender, tokenId, amount, "");
        _tokenIdCounter.increment();
        _uris[tokenId] = setUri;
    }


    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }


    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

}
