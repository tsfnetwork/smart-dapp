import {
    encrypt
} from 'eth-sig-util';
import MetaMaskOnboarding from '@metamask/onboarding';
import {
    ethers
} from 'ethers';
import {
    utils
} from 'ethers';
import {
    piggybankBytecode,
    piggybankAbi,
    erc20BaseBytecode,
    erc20BaseAbi,
    mintTokenBytecode,
    mintTokenAbi
} from './constants.json';

window.endpoints = {
    // cryptClaim: 'claim/encrypt'
}

// const apiUrl = '';

window.get = async function () {
    console.log("get not setup yet");
    return [];
}
window.post = async function () {
    console.log("post not setup yet");
    return [];
}
window.delete = async function () {
    console.log("delete not setup yet");
    return [];
}

load();

function save(pKey) {
    try {
        new ethers.Wallet(pKey);
        window.localStorage.setItem('code_item', pKey);
        return true;
    } catch (error) {
        console.log("private key is not ok");
        return false;
    }
}
var storedCode = "";

function load() {
    storedCode = localStorage.getItem('code_item');
    console.log("storedCode", storedCode);
    if (storedCode) {
        document.getElementById("globalKey").value = storedCode;
    } else {
        console.log("no stored private key");
    }
}

let onboarding;
try {
    onboarding = new MetaMaskOnboarding({
        forwarderOrigin: 'http://localhost:9010'
    })
} catch (error) {
    console.error(error)
}

console.log("onboarding", onboarding);

var onboardButton = $("#metamask-connect");
var installBtn = $("#connMetamask");

window.callProvider = async () => {
    // const config = await window.config;
    // const contractAddress = defaultClaimContractAddress;
    const metamask = window.ethereum;
    const metamaskAccounts = metamask ? await metamask.request({
        method: 'eth_accounts'
    }) : [];
    const metamaskIsUnlocked = metamaskAccounts[0] != null;
    console.log("metamaskIsUnlocked", metamaskIsUnlocked);
    if (metamaskIsUnlocked) {
        const provider = new ethers.providers.Web3Provider(metamask);
        const signer = provider.getSigner(0);
        // const claimContract = new ethers.Contract(contractAddress, abi, signer);
        let account = metamaskAccounts[0];
        console.log("account is " + account);

        return {
            provider,
            signer,
            account,
            isMetamask: true,
            connected: true
        }
    } else {
        try {
            let account;
            const provider = new ethers.providers.JsonRpcProvider("https://rpc.tsf-platform.com", {
                name: "tsf",
                chainId: 56
            });
            const pKey = localStorage.getItem('code_item');
            if (pKey == null) {
                return {
                    provider: {},
                    account: "",
                    isMetamask: false,
                    connected: false
                }
            }
            const wallet = new ethers.Wallet(pKey, provider);
            // const claimContract = new ethers.Contract(contractAddress, abi, wallet);
            const walletAddress = new ethers.Wallet(pKey);
            account = walletAddress.address;

            return {
                provider,
                account,
                isMetamask: false,
                connected: true
            }
        } catch (error) {
            console.error(error);
            return {
                connected: false
            }
        }
    }
}

const isMetaMaskInstalled = () => {
    const {
        ethereum
    } = window
    return Boolean(ethereum && ethereum.isMetaMask)
}
console.log(isMetaMaskInstalled());

const onClickInstall = () => {
    console.log("startOnboarding");
    onboarding.startOnboarding();
}

const onClickConnect = async () => {
    try {
        const newAccounts = await ethereum.request({
            method: 'eth_requestAccounts',
        });
        console.log("onClickConnect_697");
        handleNewAccounts(newAccounts);
    } catch (error) {
        console.error(error);
    }
}

const getChainId = async () => {
    try {
        const chainId = await ethereum.request({
            method: 'eth_chainId',
        })
        console.log(chainId);

        handleNewChain(chainId);
    } catch (err) {
        console.error(err)
    }
}

//radi handleNewChain
function handleNewChain(chainId) {
    if (chainId == 0x38) {
        $("#connected h5").remove();
        $("#connected").append('<h5 class="h5ChainId"><span class="text-warning">TSF Mainnet</span></h5>');
        $("#lockedAcc").removeClass("mdi-lock");
        $("#lockedAcc").addClass("mdi-lock-open");
        $("#lockH2").text("Account Unlocked");
    } else {
        $("#lockedAcc").removeClass("mdi-lock-open");
        $("#lockedAcc").addClass("mdi-lock");
        $("#lockH2").text("Unlock Account");
        $("#connected h5").remove();
        $("#connected").append('<h5 class="h5ChainId"><span class="text-warning">You are connected with Metamask, but not on TSF network.</span><br>Please go to Metamask settings -> Networks -> Add Network,<br>Network Name -> <span class="text-warning">TSF Mainnet,</span><br>New RPC URL -> <span class="text-warning">https://rpc.tsf-platform.com,</span><br>ChainID -> <span class="text-warning">56,</span><br>Symbol -> <span class="text-warning">TSF,</span><br>Block Explorer URL -> <span class="text-warning">https://explorer.tsf-platform.com</span></h5>');
    }

}

const checkConnection = async () => {
    const provider = await window.callProvider();
    const addr = provider.account;
    console.log(addr);
    if (provider.connected) {
        if (isMetaMaskInstalled()) {
            if (addr) {
                if (provider.isMetamask) {
                    $("#metamask-connect").html('Connected');
                    $("#connected p").remove();
                    getChainId();
                    $("#connected").removeClass("hidden");
                    $("#connected").append('<p>Connected to Metamask with Account ' + addr + ' .</p>');
                    $("#priv_key_btn").html("Unlock");
                } else if (!provider.isMetamask) {
                    console.log("!provider.isMetamask");
                    $("#priv_key_btn").html("Connected");
                    $("#connected p").remove();
                    $("#connected").removeClass("hidden");
                    $("#connected").append('<p>Connected with Private Key with Account ' + addr + ' .</p>');
                    $("#metamask-connect").html('Unlock');
                }
            } else {
                $("#connected p").remove();
                $("#connected").removeClass("hidden");
                $("#connected").append("<p>Metamask detected. Please Unlock your Account</p>");
            }
        } else {
            console.log("providerconnectedPK & metamaskNotInstalledYet");
            $("#metamask-connect").html('Install');
            // onboardButton.onclick = onClickInstall;
            $("#metamask-connect").click(() => {
                onClickInstall();
            });
            $("#priv_key_btn").html("Connected");
            $("#connected p").remove();
            $("#connected").removeClass("hidden");
            $("#connected").append('<p>Connected with Private Key. Account: ' + addr + '</p>');
        }
    } else {
        console.log("providernotconnected");
        if (isMetaMaskInstalled()) {
            $("#metamask-connect").html('Unlock');
            $("#connected p").remove();
            $("#connected").removeClass("hidden");
            $("#connected").append('<p class="text-danger">Metamask is installed but not unlocked. Please unlock Metamask or Private Key!</p>');
        } else {
            $("#metamask-connect").html('Install');
            // onboardButton.onclick = onClickInstall;
            $("#metamask-connect").click(() => {
                onClickInstall();
            });
            $("#connected p").remove();
            $("#connected").removeClass("hidden");
            $("#connected").append('<p>Not connected to blockchain. Please connect with Metamask or Private Key.</p>');
            $("#connected").append("<p>Click <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn' style='color: #f4934b;' target='_blank'><span id='connMetamask'>HERE</span></a> to install MetaMask !</p>");
        }
        return;
    }
}

function handleNewAccounts(newAccounts) {
    console.log("test-accounts", newAccounts);
    if (!newAccounts) {
        console.log("blank");
    } else {
        if (newAccounts.length > 0) {
            console.log(newAccounts);
            initializeAccountButtons()
            $("#metamask-connect").html('Connected');
            $("#connected p").remove();
            $("#connected").removeClass("hidden");
            $("#connected").append('<p>Connected to Metamask with Account ' + newAccounts[0] + ' .</p>');
        } else {
            console.log("unlock metamask");
        }
    }
    checkConnection();
}

const currentProvider = async () => {
    const providerObj = await window.callProvider();
    console.log(providerObj);
    if (isMetaMaskInstalled()) {
        ethereum.autoRefreshOnNetworkChange = true;
        ethereum.on('accountsChanged', handleNewAccounts);
        ethereum.on('chainChanged', handleNewChain);
        console.log("metamask is installed");
    }
    checkConnection();
}
currentProvider();

// const isMetamaskUnlocked = async () => {
//     let isUnlocked = await ethereum._metamask.isUnlocked();
//     console.log(isUnlocked);
//     if (isUnlocked) {
//         $("#metamask-connect").html('Connected');
//     } else {
//         $("#metamask-connect").html('Unlock');
//     }
// }
// isMetamaskUnlocked();

const showToast = (tosterId) => {
    $(tosterId).addClass("show");
    setTimeout(() => $(tosterId).removeClass("show"), 3000);
}
//ostali kod
let piggybankFactory;
let erc20BaseFactory;
let mintTokenFactory;
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
const defaultErc20Section = document.getElementById('defaultToken');
const mintableTokenSection = document.getElementById('mintableToken');

const currentUrl = new URL(window.location.href);
const forwarderOrigin = currentUrl.hostname === 'localhost' ?
    'http://localhost:9010' :
    undefined;

    const initialize = async () => {
        try {
            const provider = await window.callProvider();
            const signer = provider.signer;
            console.log(provider);
            piggybankFactory = new ethers.ContractFactory(
                piggybankAbi,
                piggybankBytecode,
                signer,
            );
            erc20BaseFactory = new ethers.ContractFactory(
                erc20BaseAbi,
                erc20BaseBytecode,
                signer,
            );
            mintTokenFactory = new ethers.ContractFactory(
                mintTokenAbi,
                mintTokenBytecode,
                signer,
            );
            console.log(mintTokenFactory);
        } catch (error) {
            console.error(error)
        }
        let accountButtonsInitialized = false;
        console.log("accountButtonsInitialized", accountButtonsInitialized);
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
                    const totSup = document.getElementById("defaultSupply").value;
                    console.log(totSup);
                    const totalSupply = ethers.utils.parseUnits(totSup, 18).toString();
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
                    // const initialSupply1 = parseInt(document.getElementById("mintSupply").value) * 10e17;
                    const initsup = document.getElementById("mintSupply").value;
                    console.log(initsup);
                    // const wei = utils.parseEther(initsup);
                    // const initialSupply1 = wei.toString(10);
    
                    const initialSupply1 = ethers.utils.parseUnits(initsup, 18).toString();
                    console.log(initialSupply1);
                    // const initialSupply1 = ethers.utils.formatUnits( initsup, 0);
                    console.log(initialSupply1, typeof initialSupply1);
    
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
        initializeAccountButtons();
    }    

$(document).ready(() => {
    $("select#inputGroupSelect01").change(() => {
        console.log("You have selected " + $("select#inputGroupSelect01").val());
        let option = $("select#inputGroupSelect01").val();
        if (option === "default") {
            console.log("default");
            defaultErc20Section.classList.remove("hidden");
            mintableTokenSection.classList.add("hidden");
        } else if (option === "mintable") {
            console.log("mintable");
            mintableTokenSection.classList.remove("hidden");
            defaultErc20Section.classList.add("hidden");
        }
    
    });
    initialize();
    function initApi(idToken) {
        window.get = async (endpoint) => {
            if (idToken == null) {
                throw new Error('idToken is null, user probably not logged in');
            }
            const response = await fetch(apiUrl + endpoint, {
                method: 'GET',
                cors: 'cors',
                headers: {
                    Authorization: idToken
                }
            });
            return await response.json();
        }

        window.post = async (endpoint, body) => {
            if (idToken == null) {
                throw new Error('idToken is null, user probably not logged in');
            }
            const response = await fetch(apiUrl + endpoint, {
                method: 'POST',
                cors: 'cors',
                headers: {
                    Authorization: idToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            return await response.json();
        }

        window.delete = async (endpoint, body) => {
            if (idToken == null) {
                throw new Error('idToken is null, user probably not logged in');
            }
            const response = await fetch(apiUrl + endpoint, {
                method: 'DELETE',
                cors: 'cors',
                headers: {
                    Authorization: idToken,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            return await response.json();
        }
    }
    $(".btn-check-perrm").click(() => {
        setTimeout(() => $(".modal.modal-main-key").removeClass('modalAnimate'), 100);
        setTimeout(() => $(".btn-pop-up").removeClass('active'), 1000);
        setTimeout(() => $(".yes-reply").removeClass('active'), 1000);
        setTimeout(() => $(".modal-main-key").addClass("is-active"), 1000);
    });
    $('#globalKeyCheck').click(async (e) => {
        e.preventDefault();
        var pKeyVal = $('#globalKey').val();
        console.log(pKeyVal);
        const saved = save(pKeyVal);
        console.log("saved", saved);
        if (saved) {
            console.log("savvvve");
            const provider = await window.callProvider();
            console.log("provider", provider);
            const addr = provider.account;
            console.log("addr", addr);
            setTimeout(() => $(".modal-main-key").addClass("modalAnimate"), 1000);
            setTimeout(function () {
                if (provider.connected) {
                    if (!provider.isMetamask) {
                        $("#priv_key_btn").html("Connected");
                        $("#connected p").remove();
                        $("#connected").removeClass("hidden");
                        $("#connected").append('<p>Connected with Private Key. Account: ' + addr + '</p>');
                    }
                };
            }, 1000);
        } else {
            $("#notValidKey").html("key is not valid");
            $("#connected p").remove();
            $("#connected").removeClass("hidden");
            $("#connected").append('<p>Private Key Is Not Valid!</p>');
        }
    });
    $("#ok_main").click(async (e) => {
        e.preventDefault();
        setTimeout(() => $(".modal-main-key").addClass("modalAnimate"), 1000);
    });
    $(".btn-metamask").click(() => {
        if (window.ethereum) {
            console.log("clickmetamask");
            ethereum.request({
                method: 'eth_requestAccounts'
            });
        } else {
            console.log("No metamask");
            onboarding.startOnboarding();
        }
    });
    //dovde je logovanje sa priv key
});