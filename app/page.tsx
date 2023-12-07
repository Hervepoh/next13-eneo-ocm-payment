"use client"
import Hero from '@/components/Hero'
import PaymentList from '@/components/PaymentList'
import Skeleton from '@/components/Skeleton'
import Image from 'next/image'
import { useState,useEffect } from 'react'

export default function Home() {

  const [paymentList, setPaymentList] = useState([]);
  
  useEffect(() => {
    getPayments("")
  }, [])
  
  const getPayments = async (input: string ) => { 
    setPaymentList([]);
    const searchParam = input.split("/");
    const type = searchParam[0];
    const value = searchParam[1];
   
    if (type !== "") {
      const result = await fetch('/api/payment' +'?type='+ type+ '&value='+value);
      const data = await result.json();
      setPaymentList(data.payments);
    }
  }

  return (
    <div>
        <Hero userInput={(value: string) => getPayments(value)}/>
        { paymentList? <PaymentList paymentList={paymentList} />:null  }
        { paymentList?.length== 0 ?   <div className='px-[10px] md:px-[120px] mt-7 z-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            { [0,1,2,3,4,5,6,7].map((item:number,index:number) => (
                     <Skeleton key={index} />
            )) }
        </div></div>  :null 
         
        }
    </div>
  )
}
