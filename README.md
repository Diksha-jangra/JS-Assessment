
# DrivingLicenseEligibility Smart Contract


This smart contract allows users to set their age and vehicle ownership status to check their eligibility for a driving license.


## Description

The DrivingLicenseEligibility smart contract stores user age and vehicle ownership status to determine if they are eligible for a driving license. Users can set their age and vehicle ownership status, and then check their eligibility based on these parameters. The contract enforces rules such as valid age range and vehicle ownership requirements.

## Getting Started

### Installing

To run these program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.


To deploy and interact with this smart contract, follow these steps:

1.Clone the repository or copy the code from the smart contract project file.

2.Ensure you have Solidity and a suitable Ethereum development environment like Remix or Truffle installed.

3.Open the DrivingLicenseEligibility.sol file in your development environment.


### Executing program
To deploy and interact with the smart contract:

1.Compile the DrivingLicenseEligibility.sol file.


2.Deploy the contract to your preferred Ethereum network.

3.Interact with the contract functions using the following steps:

	// Set the user's age
	DrivingLicenseEligibility.setAge(uint _age);
	
	// Set the user's vehicle ownership status
	DrivingLicenseEligibility.setVehicleOwnership(bool _ownsVehicle);

	// Check the user's eligibility for a driving license
	bool isEligible = DrivingLicenseEligibility.checkEligibility();

## Help

For common issues or errors, refer to the following:

1.Ensure the age is set correctly within the valid range (0 < age < 100).

2.Ensure the vehicle ownership status is set before checking eligibility.

3.Make sure you have sufficient gas to perform transactions on the Ethereum network.

## Authors
Contributors names and contact info:

Name: Diksha

Email: DIKSHA92003@GMAIL.COM



 
