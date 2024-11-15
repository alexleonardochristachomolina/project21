// Store all web 3 logic in context folder

import React, {useContext, createContext} from "react";
import { ethers } from "ethers";
import { useAddress, useContract, useContractWrite, metamaskWallet, useConnect} from '@thirdweb-dev/react';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const {contract} = useContract('0x4282182Df91169447aa1E330760804a018960C77');
    const {mutateAsync: createTokens } = useContractWrite(contract, 'createTokens'); //write contract function in smart contract


    const address = useAddress();
    console.log("address" + address);
    const metamaskConfig = metamaskWallet(); //Used to connect to metamask wallet
    const connect = useConnect(); //Used to connect to smart wallets


    const CreateToken = async (form) => {
      try{
        const data = await createTokens({ 
          args:[
          address, //owner
          form.title, //title
          form.description, //description
          form.cost, //cost of NFT
          form.image //Image of NFT
        ],
      });
        console.log("Create token call successful" + data);
      }catch(error){
        console.log("Create token failed" + error);
      }
    }

    const getAllTokens = async() => {
      const alltokens = await contract.call("getAllTokens"); // This code is part of js not jsx, don't use useContractRead hook inside function definition
      console.log(alltokens);
      const parsedTokens = alltokens.map((token, i)=> 
      ({
        owner: token.owner,
        title: token.title,
        description: token.description,
        cost: ethers.utils.formatEther(token.cost.toString()),
        image: token.image,
        purchasecount:token.purchasecount.toString(),
        buyers:token.buyers,
        volume: ethers.utils.formatEther(token.volume.toString()),
        pId: i
      }));
      return parsedTokens;
    }

    const getUserTokens = async() => {
      const alltokens = await getAllTokens();
      console.log(Array.isArray(alltokens));
      const userTokens = alltokens.filter((token) => token.owner === address)
      console.log("userTokens" + userTokens);
      console.log(Array.isArray(userTokens));
      return userTokens;
    }

    const buyNFT = async(tid, amount) => {
      try{
        console.log('Inside the buyNFT method');
        console.log('state ID: ' + tid);
      const data = await contract.call('buyTokens', [tid], {value: ethers.utils.parseEther(amount)});
      console.log("data value " + data);
      }
      catch(error){
        console.log(error);
      }
    }

    return(
      <StateContext.Provider // value details will be shared across all pages/components
        value = {{ 
          address,
          contract,
          connect,
          metamaskConfig,
          getAllTokens,
          getUserTokens,
          buyNFT,
          createTokens: CreateToken,
        }}
      >
        {children}
      </StateContext.Provider>
    
    )
}




export const useStateContext = () => useContext(StateContext);