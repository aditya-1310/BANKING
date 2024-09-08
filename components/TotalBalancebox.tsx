import React from 'react'
import DoughnutChart from './DoughnutChart';
import Ani from './Animation';

const TotalBalancebox = ( {accounts =[], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart '>  
               <DoughnutChart accounts={accounts}/>
            </div> 

    <div className="flex flex-col gap-6">
    <div ><h1 className='header-2'>Bank Accounts: {totalBanks}</h1></div>
    <div className='flex flex-col gap-2' >
        <p className='total-balance-label   '>
            Total Current Balance
        </p>

        <div className='total-balance-amount flex-center gap-2'>
            <Ani amount={totalCurrentBalance}/>
        </div>
    </div>
    
    </div>
    </section>
  )
}

export default TotalBalancebox