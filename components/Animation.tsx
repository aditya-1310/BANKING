'use client';
import CountUp from 'react-countup';
const Animation = ({amount} : {amount: number}) => {
    return (
        <div className='w-full'>
             <CountUp 
             duration={1.5}
             prefix='$'
             decimal=','
             end ={amount}/>
        </div>
    )
}

export default Animation;