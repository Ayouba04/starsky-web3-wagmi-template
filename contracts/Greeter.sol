// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Greeter {
    string private _greeting;

    event GreetingChanged(string greeting);

    constructor(string memory greeting) {
        _greeting = greeting;
        emit GreetingChanged(greeting);
    }

    function greet() external view returns (string memory) {
        return _greeting;
    }

    function setGreeting(string calldata greeting) external {
        _greeting = greeting;
        emit GreetingChanged(greeting);
    }
}
