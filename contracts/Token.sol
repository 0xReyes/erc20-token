// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    uint256 private immutable _maxSupply;
    
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 maxSupply_,
        address initialOwner
    ) 
        ERC20(name_, symbol_)
        Ownable(initialOwner)
    {
        require(maxSupply_ > 0, "Token: Max supply must be positive");
        require(initialOwner != address(0), "Token: Owner cannot be zero address");
        
        _maxSupply = maxSupply_ * 10**decimals(); // Store as immutable
        
        // Mint initial supply
        _mint(initialOwner, _maxSupply / 2); // 50% to owner
        _mint(address(this), _maxSupply / 2); // 50% to contract
    }

    function releaseTeamTokens(address recipient) external onlyOwner {
        require(recipient != address(0), "Token: Recipient cannot be zero address");
        uint256 contractBalance = balanceOf(address(this));
        _transfer(address(this), recipient, contractBalance);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(to != address(0), "Token: Cannot mint to zero address");
        require(amount > 0, "Token: Amount must be positive");
        require(totalSupply() + amount <= _maxSupply, "Token: Exceeds max supply");
        
        _mint(to, amount);
    }

    function maxSupply() public view returns (uint256) {
        return _maxSupply;
    }
}