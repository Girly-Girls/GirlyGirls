const contractABI = require("../contract-abi.json");
const contractAddress = "0x4ffc9f7efd50af9939e07647348ceb552f7e4055";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/jS67yn0BN1qjwiSgSxcaBvcH_pGaD98a");

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "💰 Your wallet is now connected!",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 An Error Occured...",
        };
      }
    } else {
      return {
        address: "",
        status: "😥 An Error Occured...",
      };
    }
  };


  export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "",
          };
        } else {
          return {
            address: "",
            status: "",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 An Error Occured...",
        };
      }
    } else {
      return {
        address: "",
        status: "😥 An Error Occured...",
      };
    }
  };

  export const mintNFT = async (quantity, totalMinted) => {
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    let contractValue = web3.utils.toWei((quantity * 0.01).toString(), "ether");

    function getGasAmount(quantity) {
      switch(parseInt(quantity)) {
        case 10:
          return 480000;
        case 9:
          return 440000;
        case 8:
          return 405000;
        case 7:
          return 360000;
        case 6:
          return 320000;
        case 5:
          return 280000;
        case 4:
          return 240000;
        case 3:
          return 200000;
        case 2:
          return 160000;
        default:
          return 120000;
      };
    };

    function getMintAmount() {
      if (totalMinted < 500) {
        return parseInt(0).toString(16);
      };
      return parseInt(contractValue).toString(16);
    };
  
    const transactionParameters = {
      to: contractAddress,
      from: window.ethereum.selectedAddress,
      data: window.contract.methods.mint(quantity).encodeABI(),
      value: getMintAmount(),
      gas: parseInt(getGasAmount(quantity)).toString(16)
    };

    if (quantity > 10) {
      return {
        success: false,
        status: "😥 An Error Occured...",
      };
    }
  
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      return {
        success: true,
        status: "https://etherscan.io/tx/" + txHash,
      };

    } catch (error) {

      return {
        success: false,
        status: "😥 An Error Occured...",
      };
      
    }
  };
