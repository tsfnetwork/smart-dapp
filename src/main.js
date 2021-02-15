import {
    encrypt
} from 'eth-sig-util';
import MetaMaskOnboarding from '@metamask/onboarding';
import {
    ethers
} from 'ethers';
import {
    piggybankBytecode,
    piggybankAbi,
    erc20BaseBytecode,
    erc20BaseAbi,
    mintTokenBytecode,
    mintTokenAbi
} from './constants.json';

let provider;
let piggybankFactory;
let erc20BaseFactory;
let mintTokenFactory;

const currentUrl = new URL(window.location.href);
const forwarderOrigin = currentUrl.hostname === 'localhost' ?
    'http://localhost:9010' :
    undefined;

const isMetaMaskInstalled = () => {
    const {
        ethereum
    } = window
    return Boolean(ethereum && ethereum.isMetaMask)
}
console.log(isMetaMaskInstalled());
const networkDiv = document.getElementById('network');
const accountsDiv = document.getElementById('accounts');
const onboardButton = document.getElementById('connectButton');
const deployButton = document.getElementById('deployButton');
const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const createToken = document.getElementById('createToken');
const createMintableToken = document.getElementById('createMintableToken');
const contractStatus = document.getElementById('contractStatus');
const contractStatus1 = document.getElementById('contractStatus1');
const contractStatus2 = document.getElementById('contractStatus2');
const contractAddress = document.getElementById('contractAddress');
const contractAddress1 = document.getElementById('contractAddress1');
const contractAddress2 = document.getElementById('contractAddress2');
const contractHash = document.getElementById('contractHash');
const contractHash1 = document.getElementById('contractHash1');
const contractHash2 = document.getElementById('contractHash2');
const contractCreator = document.getElementById('contractCreator');
const contractCreator1 = document.getElementById('contractCreator1');
const contractCreator2 = document.getElementById('contractCreator2');
const contractBankOutput = document.getElementById('contractBankOutput');
const defaultTokenOutput = document.getElementById('defaultTokenOutput');
const mintTokenOutput = document.getElementById('mintTokenOutput');

// const createToken = document.getElementById('createToken');

const initialize = async () => {
    try {
        provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        console.log(provider);
        piggybankFactory = new ethers.ContractFactory(
            piggybankAbi,
            piggybankBytecode,
            provider.getSigner(),
        );
        erc20BaseFactory = new ethers.ContractFactory(
            erc20BaseAbi,
            erc20BaseBytecode,
            provider.getSigner(),
        );
        mintTokenFactory = new ethers.ContractFactory(
            mintTokenAbi,
            mintTokenBytecode,
            provider.getSigner(),
        );
        console.log(mintTokenFactory);
    } catch (error) {
        console.error(error)
    }


    let onboarding;
    try {
        onboarding = new MetaMaskOnboarding({
            forwarderOrigin
        })
    } catch (error) {
        console.error(error)
    }

    let accounts;
    let accountButtonsInitialized = false;
    const isMetaMaskConnected = () => accounts && accounts.length > 0;


    const onClickInstall = () => {
        onboardButton.innerText = 'Onboarding in progress';
        onboardButton.disabled = true;
        onboarding.startOnboarding();
    }

    const onClickConnect = async () => {
        try {
            const newAccounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            handleNewAccounts(newAccounts);
        } catch (error) {
            console.error(error);
        }
    }

    const updateButtons = () => {
        const accountButtonsDisabled = !isMetaMaskInstalled() || !isMetaMaskConnected();
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
        accountButtonsInitialized = true;
        deployButton.onclick = async () => {
            let contract;
            contractStatus.innerHTML = 'Deploying';

            try {
                console.log("deploying pending");
                contract = await piggybankFactory.deploy();
                await contract.deployTransaction.wait();
                console.log("deployed");
            } catch (error) {
                contractStatus.innerHTML = 'Deployment Failed';
                console.log("go wrong");
                throw error;
            }

            if (contract.address === undefined) {
                return;
            }

            console.log(`Contract mined! address: ${contract.address} transactionHash: ${contract.deployTransaction.hash}`);
            contractStatus.innerHTML = 'Deployed';
            contractBankOutput.classList.remove('hidden');
            contractAddress.innerHTML = contract.address;
            contractHash.innerHTML = contract.deployTransaction.hash;
            contractCreator.innerHTML = contract.deployTransaction.from;

            // depositButton.disabled = false
            // withdrawButton.disabled = false

            // depositButton.onclick = async () => {
            //     contractStatus.innerHTML = 'Deposit initiated'
            //     const result = await contract.deposit({
            //         from: accounts[0],
            //         value: '0x3782dace9d900000',
            //     })
            //     console.log(result)
            //     contractStatus.innerHTML = 'Deposit completed'
            // }

            // withdrawButton.onclick = async () => {
            //     const result = await contract.withdraw(
            //         '0xde0b6b3a7640000',
            //         { from: accounts[0] },
            //     )
            //     console.log(result)
            //     contractStatus.innerHTML = 'Withdrawn'
            // }

            console.log(contract);
        }
        createToken.onclick = async () => {
            console.log("clcikkkk");
            let contract;
            contractStatus1.innerHTML = 'Deploying';
            try {
                // const name = 'TST';
                const name = document.getElementById("defaultName").value;
                console.log(name);
                const symbol = document.getElementById("defaultSymbol").value;
                console.log(symbol);
                const totalSupply = document.getElementById("defaultSupply").value;
                console.log(totalSupply);

                console.log("deploying pending");
                contract = await erc20BaseFactory.deploy(name, symbol, totalSupply);
                await contract.deployTransaction.wait();
                console.log("deployed", contract);
            } catch (error) {
                contractStatus.innerHTML = 'Deployment Failed';
                console.log("go wrong");
                throw error;
            }

            if (contract.address === undefined) {
                return;
            }

            console.log(`Contract mined! address: ${contract.address} transactionHash: ${contract.deployTransaction.hash}`);
            contractStatus1.innerHTML = 'Deployed';
            defaultTokenOutput.classList.remove('hidden');
            contractAddress1.innerHTML = contract.address;
            contractHash1.innerHTML = contract.deployTransaction.hash;
            contractCreator1.innerHTML = contract.deployTransaction.from;
        }
        createMintableToken.onclick = async () => {
            let contract;
            contractStatus2.innerHTML = 'Deploying';
            console.log("here");
            try {
                // const name = 'TST';
                console.log("here2");
                const name1 = document.getElementById("mintName").value;
                console.log(name1);
                const symbol1 = document.getElementById("mintSymbol").value;
                console.log(symbol1);
                const initialSupply1 = document.getElementById("mintSupply").value;
                console.log(initialSupply1);

                console.log("deploying pending");
                contract = await mintTokenFactory.deploy(name1, symbol1, initialSupply1);
                await contract.deployTransaction.wait();
                console.log("deployed", contract);
            } catch (error) {
                contractStatus.innerHTML = 'Deployment Failed';
                console.log("go wrong");
                throw error;
            }

            if (contract.address === undefined) {
                return;
            }

            console.log(`Contract mined! address: ${contract.address} transactionHash: ${contract.deployTransaction.hash}`);
            contractStatus2.innerHTML = 'Deployed';
            mintTokenOutput.classList.remove('hidden');
            contractAddress2.innerHTML = contract.address;
            contractHash2.innerHTML = contract.deployTransaction.hash;
            contractCreator2.innerHTML = contract.deployTransaction.from;
        }
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
window.addEventListener('DOMContentLoaded', initialize);