import React, { useState } from 'react';
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'

function Menu() {
    return(
        <div className="bg-slate-900 h-screen">
            <Nav />
            <div>
                <Contain />
            </div>
        </div>
    )
}


function Nav() {
    return(
    <div className="bg-black text-white p-4 flex flex-col text-xl absolute inset-y-0 left-0 w-64 place-content-evenly">
        <Image
        className="rounded-full"
        src="https://lh3.googleusercontent.com/-j8nIV5iv0V0MF4T1FLp7XpZm_P4C1BdNV8QQMUFpaxdiDdXOMdkxFgjRaPGgYnN_I4DlSdRNo79pJtig7esjFjc3R4F3F39jXTt=w600"
        alt="NFT Image"
        width={600}
        height={600} 
        />
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">MarketPlaces</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Crypto Prices</a></Link>
        <Link href="/checkprofit"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Check Profits</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">daisyUI</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">daisyUI</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Logout</a></Link>
    </div>
    );
}

function Contain() {
    return (
      <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
        <div className="flex items-center justify-center text-center h-fit bg-black rounded-md border border-slate-700 shadow-lg overflow-hidden">
          Data
        </div>
      </div>
    );
  }

  

  // function Connect() {
  //   const [walletAddress, setWalletAddress] = useState(null)
  //   const [walletNft, setWalletNft] = useState<[]>([])

  //   const connectWallet = async () => {
  //       if (typeof window.ethereum !== 'undefined') {
  //         console.log('MetaMask is installed!');
  //         const accountRequest = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
  //         setWalletAddress(accountRequest[0])
  //       }
  //     }
  //     const options = {
  //       method: 'GET',
  //       headers: {Accept: 'application/json', 'X-API-KEY': process.env.API_KEY}
  //     };
  //     if(!walletAddress) return;
  //     export const GetStaticProps : GetStaticProps = async (context) => {
  //       const res = await fetch(`https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&limit=20&include_orders=false`, options);
  //       const { results } = await res.json(); 
        
  //       return {
  //         props: {
  //           assets: results
  //         }
  //       }
  //   }
// }


export default Menu;