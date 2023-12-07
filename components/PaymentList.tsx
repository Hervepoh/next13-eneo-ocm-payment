import React, { useState } from 'react'
import Card from './Card'
import SideDrawer from './SideDrawer'
import Download from './Download';

const PaymentList = ({paymentList} :any ) => {

    const [selectedPayment, setSelectedPayment] = useState<any>([]);

  return (
    <div className='px-[10px] md:px-[120px] mt-7 z-10'>
        <h2 className='text-[20px] font-bold'>Search Results</h2>
        {/* <Download /> */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            { paymentList.map((payment:any,index:number) => (
                <div key={index} className='z-10' onClick={ () => setSelectedPayment(payment) }>
                    <Card payment={payment}/>
                </div>
            )) }
        </div>
        { selectedPayment?.name? <div className='fixed top-0 right-0 z-20'>
            <SideDrawer 
                place={ selectedPayment }
                close={ () => setSelectedPayment([]) } />
        </div>: null }
    </div>
  )
}

export default PaymentList