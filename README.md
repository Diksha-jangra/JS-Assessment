MyToken Smart Contract:


This repository contains the Solidity code for the MyToken smart contract, a simple token implementation on blockchain.

Contract Details:

	Token Name: MetaCrafter
	Token Symbol: M.Crft
	Total Supply: 10 (initial supply)
Functions:


	Public Variables
	string public tokenName: Stores the name of the token.
	string public tokenAbbrv: Stores the abbreviation of the token.
	uint public totalSupply: Stores the total supply of the token.
	mapping(address => uint) public money: Maps addresses to their respective token balances.
	mint(address _address, uint _value)
Increases the total supply and assigns the newly minted tokens to the specified address.

Parameters:


_address: The address to receive the minted tokens.


_value: The amount of tokens to mint.


Example:

	mint(0x1234..., 50);
 burn(address _address, uint _value):

Decreases the total supply and reduces the balance of the specified address.

Parameters:

_address: The address whose tokens will be burned.

_value: The amount of tokens to burn.
Example:


        burn(0x1234..., 20);
Requirements:

The sender's balance must be greater than or equal to the amount to be burned.
Example Usage

        // Minting tokens
        mint(0x1234..., 50);
        
        // Burning tokens
        burn(0x1234..., 20);


Executing program:


To run these program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.


 
