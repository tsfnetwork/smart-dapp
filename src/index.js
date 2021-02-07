/*
The `piggybankContract` is compiled from:

  pragma solidity ^0.4.0;
  contract PiggyBank {

      uint private balance;
      address public owner;

      function PiggyBank() public {
          owner = msg.sender;
          balance = 0;
      }

      function deposit() public payable returns (uint) {
          balance += msg.value;
          return balance;
      }

      function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
          require(msg.sender == owner);
          balance -= withdrawAmount;

          msg.sender.transfer(withdrawAmount);

          return balance;
      }
  }
  abi
  [
	{
		"constant": false,
		"inputs": [
			{
				"name": "withdrawAmount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"name": "remainingBal",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
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
		"inputs": [],
		"name": "deposit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
commit 0.4.16+commitd7661dd9
bytecode
{
	"linkReferences": {},
	"object": "6060604052341561000f57600080fd5b5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080819055505b5b610222806100696000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e1a7d4d146100545780638da5cb5b1461008b578063d0e30db0146100e0575b600080fd5b341561005f57600080fd5b61007560048080359060200190919050506100fe565b6040518082815260200191505060405180910390f35b341561009657600080fd5b61009e6101b6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100e86101dc565b6040518082815260200191505060405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561015c57600080fd5b8160008082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015156101ab57600080fd5b60005490505b919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600034600080828254019250508190555060005490505b905600a165627a7a72305820be8c3191061b62f406442ccfb2846073ee58f984671be8471c1249d2b7f7b4270029",
	"opcodes": "PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST CALLER PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x0 DUP1 DUP2 SWAP1 SSTORE POP JUMPDEST JUMPDEST PUSH2 0x222 DUP1 PUSH2 0x69 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x2E1A7D4D EQ PUSH2 0x54 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x8B JUMPI DUP1 PUSH4 0xD0E30DB0 EQ PUSH2 0xE0 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x5F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x75 PUSH1 0x4 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP2 SWAP1 POP POP PUSH2 0xFE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x96 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x9E PUSH2 0x1B6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xE8 PUSH2 0x1DC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO PUSH2 0x15C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD SUB SWAP3 POP POP DUP2 SWAP1 SSTORE POP CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP4 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO ISZERO PUSH2 0x1AB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 SLOAD SWAP1 POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 CALLVALUE PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH1 0x0 SLOAD SWAP1 POP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xbe DUP13 BALANCE SWAP2 MOD 0x1b PUSH3 0xF40644 0x2c 0xcf 0xb2 DUP5 PUSH1 0x73 0xee PC 0xf9 DUP5 PUSH8 0x1BE8471C1249D2B7 0xf7 0xb4 0x27 STOP 0x29 ",
	"sourceMap": "27:569:0:-;;;117:93;;;;;;;;;166:10;158:5;;:18;;;;;;;;;;;;;;;;;;199:1;189:7;:11;;;;117:93;27:569;;;;;;;"
}
*/

import {
  encrypt
} from 'eth-sig-util'
import MetaMaskOnboarding from '@metamask/onboarding'

const currentUrl = new URL(window.location.href)
const forwarderOrigin = currentUrl.hostname === 'localhost' ?
  'http://localhost:9010' :
  undefined

const isMetaMaskInstalled = () => {
  const {
    ethereum
  } = window
  return Boolean(ethereum && ethereum.isMetaMask)
}
console.log(isMetaMaskInstalled());
// Dapp Status Section
const networkDiv = document.getElementById('network')
console.log(networkDiv);
const chainIdDiv = document.getElementById('chainId')
console.log(chainIdDiv);
const accountsDiv = document.getElementById('accounts')
console.log(accountsDiv);
// Basic Actions Section
const onboardButton = document.getElementById('connectButton')
// const getAccountsButton = document.getElementById('getAccounts')
// const getAccountsResults = document.getElementById('getAccountsResult')

// Permissions Actions Section
// const requestPermissionsButton = document.getElementById('requestPermissions')
// const getPermissionsButton = document.getElementById('getPermissions')
// const permissionsResult = document.getElementById('permissionsResult')

// Contract Section
const deployButton = document.getElementById('deployButton')
const depositButton = document.getElementById('depositButton')
const withdrawButton = document.getElementById('withdrawButton')
const contractStatus = document.getElementById('contractStatus')
const contractAddress = document.getElementById('contractAddress')
const contractHash = document.getElementById('contractHash')

// Send Eth Section
// const sendButton = document.getElementById('sendButton')

// Send Tokens Section
const tokenAddress = document.getElementById('tokenAddress')
const createToken = document.getElementById('createToken')
const transferTokens = document.getElementById('transferTokens')
const approveTokens = document.getElementById('approveTokens')
const transferTokensWithoutGas = document.getElementById('transferTokensWithoutGas')
const approveTokensWithoutGas = document.getElementById('approveTokensWithoutGas')

// Signed Type Data Section
// const signTypedData = document.getElementById('signTypedData')
// const signTypedDataResults = document.getElementById('signTypedDataResult')

// Encrypt / Decrypt Section
// const getEncryptionKeyButton = document.getElementById('getEncryptionKeyButton')
// const encryptMessageInput = document.getElementById('encryptMessageInput')
// const encryptButton = document.getElementById('encryptButton')
// const decryptButton = document.getElementById('decryptButton')
// const encryptionKeyDisplay = document.getElementById('encryptionKeyDisplay')
// const ciphertextDisplay = document.getElementById('ciphertextDisplay')
// const cleartextDisplay = document.getElementById('cleartextDisplay')


const initialize = async () => {

  let onboarding
  try {
    onboarding = new MetaMaskOnboarding({
      forwarderOrigin
    })
  } catch (error) {
    console.error(error)
  }

  let accounts
  let piggybankContract
  let accountButtonsInitialized = false

  const accountButtons = [
    deployButton,
    depositButton,
    withdrawButton,
    createToken,
    transferTokens,
    approveTokens,
    transferTokensWithoutGas,
    approveTokensWithoutGas
  ]

  const isMetaMaskConnected = () => accounts && accounts.length > 0


  const onClickInstall = () => {
    onboardButton.innerText = 'Onboarding in progress'
    onboardButton.disabled = true
    onboarding.startOnboarding()
  }

  const onClickConnect = async () => {
    try {
      const newAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      handleNewAccounts(newAccounts)
    } catch (error) {
      console.error(error)
    }
  }

  const clearTextDisplays = () => {
    // encryptionKeyDisplay.innerText = ''
    // encryptMessageInput.value = ''
    // ciphertextDisplay.innerText = ''
    // cleartextDisplay.innerText = ''
  }

  const updateButtons = () => {
    const accountButtonsDisabled = !isMetaMaskInstalled() || !isMetaMaskConnected()
    if (accountButtonsDisabled) {
      // for (const button of accountButtons) {
      //   button.disabled = true
      // }
      // clearTextDisplays()
    } else {
      deployButton.disabled = false
      // sendButton.disabled = false
      createToken.disabled = false
      // signTypedData.disabled = false
      // getEncryptionKeyButton.disabled = false
    }

    if (!isMetaMaskInstalled()) {
      onboardButton.innerText = 'Click here to install MetaMask'
      onboardButton.onclick = onClickInstall
      onboardButton.disabled = false
    } else if (isMetaMaskConnected()) {
      onboardButton.innerText = 'Connected'
      onboardButton.disabled = true
      if (onboarding) {
        onboarding.stopOnboarding()
      }
    } else {
      onboardButton.innerText = 'Click here to unlock Metamask'
      onboardButton.onclick = onClickConnect
      onboardButton.disabled = false
    }
  }
  const initializeAccountButtons = () => {

    if (accountButtonsInitialized) {
      return
    }
    accountButtonsInitialized = true

    /**
     * Contract Interactions
     */

    // piggybankContract = web3.eth.contract([{
    //   'constant': false,
    //   'inputs': [{
    //     'name': 'withdrawAmount',
    //     'type': 'uint256'
    //   }],
    //   'name': 'withdraw',
    //   'outputs': [{
    //     'name': 'remainingBal',
    //     'type': 'uint256'
    //   }],
    //   'payable': false,
    //   'stateMutability': 'nonpayable',
    //   'type': 'function'
    // }, {
    //   'constant': true,
    //   'inputs': [],
    //   'name': 'owner',
    //   'outputs': [{
    //     'name': '',
    //     'type': 'address'
    //   }],
    //   'payable': false,
    //   'stateMutability': 'view',
    //   'type': 'function'
    // }, {
    //   'constant': false,
    //   'inputs': [],
    //   'name': 'deposit',
    //   'outputs': [{
    //     'name': '',
    //     'type': 'uint256'
    //   }],
    //   'payable': true,
    //   'stateMutability': 'payable',
    //   'type': 'function'
    // }, {
    //   'inputs': [],
    //   'payable': false,
    //   'stateMutability': 'nonpayable',
    //   'type': 'constructor'
    // }])
    // deployButton.onclick = async () => {
    //   contractStatus.innerHTML = 'Deploying'

    //   const piggybank = await piggybankContract.new({
    //     from: accounts[0],
    //     data: '0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000808190555061023b806100686000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e1a7d4d1461005c5780638da5cb5b1461009d578063d0e30db0146100f4575b600080fd5b34801561006857600080fd5b5061008760048036038101908080359060200190929190505050610112565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100b26101d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100fc6101f6565b6040518082815260200191505060405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561017057600080fd5b8160008082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156101c5573d6000803e3d6000fd5b506000549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003460008082825401925050819055506000549050905600a165627a7a72305820f237db3ec816a52589d82512117bc85bc08d3537683ffeff9059108caf3e5d400029',
    //     gas: '4700000',
    //   }, (error, contract) => {
    //     if (error) {
    //       contractStatus.innerHTML = 'Deployment Failed'
    //       throw error
    //     } else if (contract.address === undefined) {
    //       return
    //     }

    //     console.log(`Contract mined! address: ${contract.address} transactionHash: ${contract.transactionHash}`)
    //     contractStatus.innerHTML = 'Deployed'
    //     contractAddress.innerHTML = `Contract Address<br>${contract.address}`;
    //     contractHash.innerHTML = `Tx Hash<br>${contract.transactionHash}`;
    //     document.getElementById("deployedBank").classList.add("alert-secondary");
    //     depositButton.disabled = false
    //     withdrawButton.disabled = false

    //     depositButton.onclick = () => {
    //       contractStatus.innerHTML = 'Deposit initiated'
    //       contract.deposit({
    //           from: accounts[0],
    //           value: '0x3782dace9d900000',
    //         },
    //         (result) => {
    //           console.log(result)
    //           contractStatus.innerHTML = 'Deposit completed'
    //         },
    //       )
    //     }
    //     withdrawButton.onclick = () => {
    //       contract.withdraw(
    //         '0xde0b6b3a7640000', {
    //           from: accounts[0]
    //         },
    //         (result) => {
    //           console.log(result)
    //           contractStatus.innerHTML = 'Withdrawn'
    //         },
    //       )
    //     }
    //   }, )
    //   console.log(piggybank)
    // }

    /**
     * Sending ETH
     */

    // sendButton.onclick = () => {
    //   web3.eth.sendTransaction({
    //     from: accounts[0],
    //     to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
    //     value: '0x29a2241af62c0000',
    //     gas: 21000,
    //     gasPrice: 20000000000,
    //   }, (result) => {
    //     console.log(result)
    //   })
    // }

    /**
     * ERC20 Token
     */

    createToken.onclick = () => {
      console.log("clickkkkkk")
      const name = 'TST'
      const symbol = 'TST'
      const totalSupply = 1000

      const humanstandardtokenContract = web3.eth.contract([{
          "inputs": [{
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "totalSupply",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [{
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [{
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
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [{
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [{
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
          }],
          "name": "balanceOf",
          "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [{
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [{
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
          }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
          }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [{
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [{
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ])

      return humanstandardtokenContract.new(
        name,
        symbol,
        totalSyply, {
          from: accounts[0],
          data: '60806040523480156200001157600080fd5b50604051620016ac380380620016ac833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505082828160039080519060200190620001dc929190620004df565b508060049080519060200190620001f5929190620004df565b506012600560006101000a81548160ff021916908360ff1602179055505050620002476200023162000250640100000000026401000000009004565b8262000258640100000000026401000000009004565b5050506200058e565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620003196000838362000451640100000000026401000000009004565b6200033e81600254620004566401000000000262000f4a179091906401000000009004565b600281905550620003a5816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620004566401000000000262000f4a179091906401000000009004565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b505050565b600080828401905083811015620004d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200052257805160ff191683800117855562000553565b8280016001018555821562000553579182015b828111156200055257825182559160200191906001019062000535565b5b50905062000562919062000566565b5090565b6200058b91905b80821115620005875760008160009055506001016200056d565b5090565b90565b61110e806200059e6000396000f3fe608060405234801561001057600080fd5b50600436106100c6576000357c010000000000000000000000000000000000000000000000000000000090048063395093511161008e578063395093511461027c57806370a08231146102e257806395d89b411461033a578063a457c2d7146103bd578063a9059cbb14610423578063dd62ed3e14610489576100c6565b806306fdde03146100cb578063095ea7b31461014e57806318160ddd146101b457806323b872dd146101d2578063313ce56714610258575b600080fd5b6100d3610501565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101135780820151818401526020810190506100f8565b50505050905090810190601f1680156101405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019a6004803603604081101561016457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105a3565b604051808215151515815260200191505060405180910390f35b6101bc6105c1565b6040518082815260200191505060405180910390f35b61023e600480360360608110156101e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105cb565b604051808215151515815260200191505060405180910390f35b6102606106a4565b604051808260ff1660ff16815260200191505060405180910390f35b6102c86004803603604081101561029257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106bb565b604051808215151515815260200191505060405180910390f35b610324600480360360208110156102f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061076e565b6040518082815260200191505060405180910390f35b6103426107b6565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610382578082015181840152602081019050610367565b50505050905090810190601f1680156103af5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610409600480360360408110156103d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610858565b604051808215151515815260200191505060405180910390f35b61046f6004803603604081101561043957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610925565b604051808215151515815260200191505060405180910390f35b6104eb6004803603604081101561049f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610943565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105995780601f1061056e57610100808354040283529160200191610599565b820191906000526020600020905b81548152906001019060200180831161057c57829003601f168201915b5050505050905090565b60006105b76105b06109ca565b84846109d2565b6001905092915050565b6000600254905090565b60006105d8848484610bc9565b610699846105e46109ca565b6106948560405180606001604052806028815260200161104360289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061064a6109ca565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e8a9092919063ffffffff16565b6109d2565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006107646106c86109ca565b8461075f85600160006106d96109ca565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f4a90919063ffffffff16565b6109d2565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561084e5780601f106108235761010080835404028352916020019161084e565b820191906000526020600020905b81548152906001019060200180831161083157829003601f168201915b5050505050905090565b600061091b6108656109ca565b84610916856040518060600160405280602581526020016110b4602591396001600061088f6109ca565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e8a9092919063ffffffff16565b6109d2565b6001905092915050565b60006109396109326109ca565b8484610bc9565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a58576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110906024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ade576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610ffb6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061106b6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610fd86023913960400191505060405180910390fd5b610ce0838383610fd2565b610d4b8160405180606001604052806026815260200161101d602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e8a9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dde816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f4a90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f37576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610efc578082015181840152602081019050610ee1565b50505050905090810190601f168015610f295780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015610fc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e42e5990563aa25e3d59d44328f53603c0eaeb5ade57f502671a9c216b6c3c6964736f6c63430006070033',
          gas: '4700000',
          gasPrice: '20000000000',
        }, (error, contract) => {
          if (error) {
            tokenAddress.innerHTML = 'Creation Failed'
            throw error
          } else if (contract.address === undefined) {
            return
          }

          console.log(`Contract mined! address: ${contract.address} transactionHash: ${contract.transactionHash}`)
          tokenAddress.innerHTML = contract.address
          transferTokens.disabled = false
          approveTokens.disabled = false
          transferTokensWithoutGas.disabled = false
          approveTokensWithoutGas.disabled = false

          transferTokens.onclick = (event) => {
            console.log(`event`, event)
            contract.transfer('0x2f318C334780961FB129D2a6c30D0763d9a5C970', '15000', {
              from: accounts[0],
              to: contract.address,
              data: '0xa9059cbb0000000000000000000000002f318c334780961fb129d2a6c30d0763d9a5c9700000000000000000000000000000000000000000000000000000000000003a98',
              gas: 60000,
              gasPrice: '20000000000',
            }, (result) => {
              console.log('result', result)
            })
          }

          approveTokens.onclick = () => {
            contract.approve('0x9bc5baF874d2DA8D216aE9f137804184EE5AfEF4', '70000', {
              from: accounts[0],
              to: contract.address,
              data: '0x095ea7b30000000000000000000000009bc5baF874d2DA8D216aE9f137804184EE5AfEF40000000000000000000000000000000000000000000000000000000000000005',
              gas: 60000,
              gasPrice: '20000000000',
            }, (result) => {
              console.log(result)
            })
          }

          transferTokensWithoutGas.onclick = (event) => {
            console.log(`event`, event)
            contract.transfer('0x2f318C334780961FB129D2a6c30D0763d9a5C970', '15000', {
              from: accounts[0],
              to: contract.address,
              data: '0xa9059cbb0000000000000000000000002f318c334780961fb129d2a6c30d0763d9a5c9700000000000000000000000000000000000000000000000000000000000003a98',
              gasPrice: '20000000000',
            }, (result) => {
              console.log('result', result)
            })
          }

          approveTokensWithoutGas.onclick = () => {
            contract.approve('0x2f318C334780961FB129D2a6c30D0763d9a5C970', '70000', {
              from: accounts[0],
              to: contract.address,
              data: '0x095ea7b30000000000000000000000002f318C334780961FB129D2a6c30D0763d9a5C9700000000000000000000000000000000000000000000000000000000000000005',
              gasPrice: '20000000000',
            }, (result) => {
              console.log(result)
            })
          }
        },
      )
    }

    /**
     * Sign Typed Data
     */

    // signTypedData.onclick = async () => {
    //   const networkId = parseInt(networkDiv.innerHTML, 10)
    //   const chainId = parseInt(chainIdDiv.innerHTML, 10) || networkId

    //   const typedData = {
    //     types: {
    //       EIP712Domain: [{
    //           name: 'name',
    //           type: 'string'
    //         },
    //         {
    //           name: 'version',
    //           type: 'string'
    //         },
    //         {
    //           name: 'chainId',
    //           type: 'uint256'
    //         },
    //         {
    //           name: 'verifyingContract',
    //           type: 'address'
    //         },
    //       ],
    //       Person: [{
    //           name: 'name',
    //           type: 'string'
    //         },
    //         {
    //           name: 'wallet',
    //           type: 'address'
    //         },
    //       ],
    //       Mail: [{
    //           name: 'from',
    //           type: 'Person'
    //         },
    //         {
    //           name: 'to',
    //           type: 'Person'
    //         },
    //         {
    //           name: 'contents',
    //           type: 'string'
    //         },
    //       ],
    //     },
    //     primaryType: 'Mail',
    //     domain: {
    //       name: 'Ether Mail',
    //       version: '1',
    //       chainId,
    //       verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    //     },
    //     message: {
    //       sender: {
    //         name: 'Cow',
    //         wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    //       },
    //       recipient: {
    //         name: 'Bob',
    //         wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    //       },
    //       contents: 'Hello, Bob!',
    //     },
    //   }

    //   try {
    //     const result = await ethereum.request({
    //       method: 'eth_signTypedData_v3',
    //       params: [accounts[0], JSON.stringify(typedData)],
    //     })
    //     signTypedDataResults.innerHTML = JSON.stringify(result)
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }

    /**
     * Permissions
     */

    // requestPermissionsButton.onclick = async () => {
    //   try {
    //     const permissionsArray = await ethereum.request({
    //       method: 'wallet_requestPermissions',
    //       params: [{
    //         eth_accounts: {}
    //       }],
    //     })
    //     permissionsResult.innerHTML = getPermissionsDisplayString(permissionsArray)
    //   } catch (err) {
    //     console.error(err)
    //     permissionsResult.innerHTML = `Error: ${err.message}`
    //   }
    // }

    // getPermissionsButton.onclick = async () => {
    //   try {
    //     const permissionsArray = await ethereum.request({
    //       method: 'wallet_getPermissions',
    //     })
    //     permissionsResult.innerHTML = getPermissionsDisplayString(permissionsArray)
    //   } catch (err) {
    //     console.error(err)
    //     permissionsResult.innerHTML = `Error: ${err.message}`
    //   }
    // }

    // getAccountsButton.onclick = async () => {
    //   try {
    //     const _accounts = await ethereum.request({
    //       method: 'eth_accounts',
    //     })
    //     getAccountsResults.innerHTML = _accounts[0] || 'Not able to get accounts'
    //   } catch (err) {
    //     console.error(err)
    //     getAccountsResults.innerHTML = `Error: ${err.message}`
    //   }
    // }

    /**
     * Encrypt / Decrypt
     */

    // getEncryptionKeyButton.onclick = async () => {
    //   try {
    //     encryptionKeyDisplay.innerText = await ethereum.request({
    //       method: 'eth_getEncryptionPublicKey',
    //       params: [accounts[0]],
    //     })
    //     encryptMessageInput.disabled = false
    //   } catch (error) {
    //     encryptionKeyDisplay.innerText = `Error: ${error.message}`
    //     encryptMessageInput.disabled = true
    //     encryptButton.disabled = true
    //     decryptButton.disabled = true
    //   }
    // }

    // encryptMessageInput.onkeyup = () => {
    //   if (!getEncryptionKeyButton.disabled &&
    //     encryptMessageInput.value.length > 0
    //   ) {
    //     if (encryptButton.disabled) {
    //       encryptButton.disabled = false
    //     }
    //   } else if (!encryptButton.disabled) {
    //     encryptButton.disabled = true
    //   }
    // }

    // encryptButton.onclick = () => {
    //   try {
    //     ciphertextDisplay.innerText = web3.toHex(JSON.stringify(
    //       encrypt(
    //         encryptionKeyDisplay.innerText, {
    //           'data': encryptMessageInput.value
    //         },
    //         'x25519-xsalsa20-poly1305',
    //       ),
    //     ))
    //     decryptButton.disabled = false
    //   } catch (error) {
    //     ciphertextDisplay.innerText = `Error: ${error.message}`
    //     decryptButton.disabled = true
    //   }
    // }

    // decryptButton.onclick = async () => {
    //   try {
    //     cleartextDisplay.innerText = await ethereum.request({
    //       method: 'eth_decrypt',
    //       params: [ciphertextDisplay.innerText, ethereum.selectedAddress],
    //     })
    //   } catch (error) {
    //     cleartextDisplay.innerText = `Error: ${error.message}`
    //   }
    // }
  }

  function handleNewAccounts(newAccounts) {
    accounts = newAccounts
    accountsDiv.innerHTML = accounts
    if (!accounts) {
      console.log("blank");
    } else {
      if (accounts.length > 0) {
        console.log(accounts);

      } else {
        accountsDiv.innerHTML = "Unlock Metamask !"
      }

    }

    if (isMetaMaskConnected()) {
      console.log("metamask connected")
      initializeAccountButtons()
    }
    updateButtons()
  }

  // function handleNewChain(chainId) {

  //   console.log(chainId);
  // }

  // function handleNewNetwork(networkId) {

  //   if (networkId == 56) {
  //     networkDiv.innerHTML = 'TSF Mainnet';
  //     console.log("tsf");
  //     document.getElementById("notice").classList.add("hidden");
  //   } else {
  //     document.getElementById("notice").classList.remove("hidden");
  //     networkDiv.innerHTML = 'You are connected with Metamask, but not on TSF network.<br>Please go to Metamask settings -> Networks -> Add Network,<br>Network Name -> TSF Mainnet,<br>New RPC URL -> https://rpc.tsfexplorer.xyz,<br>ChainID -> 56,<br>Symbol -> TSF,<br>Block Explorer URL -> https://explorer.tsf-platform.com';
  //   }
  // }
  function handleNewChain(chainId) {
    // networkDiv.innerHTML = networkId;
    if (chainId == 0x38) {
      networkDiv.innerHTML = 'TSF Mainnet';
      console.log("tsf");
      document.getElementById("notice").classList.add("hidden");
    } else {
      document.getElementById("notice").classList.remove("hidden");
      networkDiv.innerHTML = 'You are connected with Metamask, but not on TSF network.<br>Please go to Metamask settings -> Networks -> Add Network,<br>Network Name -> TSF Mainnet,<br>New RPC URL -> https://rpc.tsfexplorer.xyz,<br>ChainID -> 56,<br>Symbol -> TSF,<br>Block Explorer URL -> https://explorer.tsf-platform.com';
    }
  }

  async function getNetworkAndChainId() {
    try {
      const chainId = await ethereum.request({
        method: 'eth_chainId',
      })
      console.log(chainId)
      handleNewChain(chainId)

      // const networkId = await ethereum.request({
      //   method: 'net_version',
      // })
      // handleNewNetwork(networkId)
    } catch (err) {
      console.error(err)
    }
  }

  updateButtons()

  if (isMetaMaskInstalled()) {

    ethereum.autoRefreshOnNetworkChange = false
    getNetworkAndChainId()
    console.log("handle111");
    ethereum.on('chainChanged', handleNewChain)
    console.log("handlechain2");
    // ethereum.on('networkChanged', handleNewNetwork)
    ethereum.on('accountsChanged', handleNewAccounts)
    console.log("handle3");

    try {
      const newAccounts = await ethereum.request({
        method: 'eth_accounts',
      })
      handleNewAccounts(newAccounts)
      console.log("handle1");
    } catch (err) {
      console.error('Error on init when getting accounts', err)
    }
  }
}

window.addEventListener('DOMContentLoaded', initialize)

function getPermissionsDisplayString(permissionsArray) {
  if (permissionsArray.length === 0) {
    return 'No permissions found.'
  }
  const permissionNames = permissionsArray.map((perm) => perm.parentCapability)
  return permissionNames.reduce((acc, name) => `${acc}${name}, `, '').replace(/, $/u, '')
}