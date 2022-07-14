import React from 'react'
import TransactionCard from './TransactionCard'
import {ALL_TRANSCATIONS} from "../constant"


export default function DayCard({id, date, Transactions}) {
  return (
      <div className='dayCard'>
      <p className='day'>{date }</p>
      {
        Transactions.map(trx => <TransactionCard key={trx.id} {...trx} />)
      }
          
        
          <style jsx="true">
              {`
              .dayCard{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
              .day{
                font-weight: bold;
                color: darkgray;
              }
              `}
          </style>
    </div>
  )
}
 