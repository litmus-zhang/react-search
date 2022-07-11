import React from 'react'
import TransactionCard from './TransactionCard'


export default function DayCard() {
  return (
      <div className='dayCard'>
        <p className='day'>11th July 2022</p>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
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
