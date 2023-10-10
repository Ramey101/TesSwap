import useEthereum from "@/hooks/useEthereum";
import { useEffect } from "react";
import Swap from "@/component/swap";

// homepage function
export default function Home() {
  const { balance, getBalance, connect, address} = useEthereum();


  //to show the balance in the home div
  useEffect(() => {
    connect()
  }, [address]);
  useEffect(() => {
    if (address) {
      getBalance()
    }
  }, [address])


// returning the homedisplay
  return (
    <div>
      <Navigation/>
      <div className="container mx-auto ">
      <div className="flex">
       {/* <div className="p-3 w-1/5 bg-gray-200 rounded-xl ">
       balance: {balance.toString()}
       </div> */}
      </div>
    </div> <div className="flex w-1/3 items-center justify-center bg-gray-200">
      <Swap />
    </div>
   
  </div>
  )
}
// end of the main function


/////////////////////////////////////////////////////////////////////////
// button functions 
const Button = ({children, onClick}) => {
  return(
     <button 
     onClick={onClick}
     className='p-3 bg-blue-500 font-bold rounded-lg text-white'>
    {children}
    </button>
  )
}
///////////////////////////////


// navigation bar functioon
const Navigation  =() => {
 
  const {connect, setAddress, address, balance, getBalance} = useEthereum();

  useEffect(() => {
    if (address) {
      getBalance()
    }
  }, [address])

  // fuction to disconnect the wallet , need to be in the homepage
  const  Disconnect =() => {
    if (address) {
      return(
        setAddress(null)
        )}
        else { 
          return(
            address
        )} 
  }
  return <div className='container mx-auto py-10 mb-20'>
    <div className='flex justify-between'>
      <div>
        <a>MayaSwap</a>
      </div>
      <div className='flex space-x-10 align-'>
        <a>swap</a>
        <a>stake</a>
        <a>help</a>

        {address ? (
          <div>
                  {balance} <Button onClick={Disconnect}>Disconnect</Button>

          </div>
        ) : (
          <Button onClick={connect}>Connect</Button>
        )}

      </div>
    </div>

  </div>
}
