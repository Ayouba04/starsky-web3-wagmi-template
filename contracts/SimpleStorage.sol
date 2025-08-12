// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleStorage {
    uint256 private _value;
    address public owner;
    
    event ValueChanged(uint256 indexed newValue, address indexed changedBy);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    constructor(uint256 _initialValue) {
        _value = _initialValue;
        owner = msg.sender;
        emit ValueChanged(_initialValue, msg.sender);
    }
    
    function setValue(uint256 newValue) external {
        _value = newValue;
        emit ValueChanged(newValue, msg.sender);
    }
    
    function getValue() external view returns (uint256) {
        return _value;
    }
    
    function increment() external {
        _value += 1;
        emit ValueChanged(_value, msg.sender);
    }
    
    function decrement() external {
        require(_value > 0, "Value cannot be negative");
        _value -= 1;
        emit ValueChanged(_value, msg.sender);
    }
    
    function reset() external onlyOwner {
        _value = 0;
        emit ValueChanged(0, msg.sender);
    }
}
