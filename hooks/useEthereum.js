import { ethers } from "ethers";
import { useState } from "react";

const useEthereum = () => {
    const [address, setAddress] = useState(null);
    const [balance , setBalance] = useState(0);
    const [signer, setSigner] = useState();

    const getBalance = async () => {
        const balance = await signer.getBalance()
        setBalance(ethers.utils.formatEther(balance).slice(0, 6))
    }


    const connect = async() => {
          if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(
                window.ethereum,
                 "any"
                 ); 
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner()
                setSigner(signer)

                const address = await signer.getAddress()
                setAddress(address)

    }
    }

  

    return {
        getBalance,
        connect,
        address,
        balance,
        setAddress,
    }

}

export default useEthereum;
