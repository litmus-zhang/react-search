import React, { useState } from 'react'

export default function TransactionCard()
{
    const [debit, setDebit] = useState(false)
  return (
      <div className={debit ? 'Trx debit' : "Trx credit"}>
          <div className='left'>
              <div className={debit ? 'type debit' : "type credit"}>
                  {debit ? "DR" : "CR"}
              </div>
          <div className='info'>
              <strong className='receiver'>
                  Lukmon Abdulsalam
              </strong>
              <p className='details'>
                  This is a sample transaction
              </p>
          </div>
          </div>
          
          <div className='right'>
              <strong className={debit ? 'debit-amount' : "credit-amount"}>
                  $25.60
              </strong>
              <p>
                  Pending
              </p>
          </div>
          <style jsx="true">{`
          .Trx{
            display: flex;
            width: 400px;
            justify-content:space-between;
            align-items: center;
            padding: 1rem;
            border-radius: 1rem;
            height: 60px;
            margin-bottom: .5rem;
          }
          .Trx.credit{
            border: 1px solid green;
          }
          .Trx.debit{
            border: 1px solid red;
          }

          .left{
            display: flex;
            align-items: center;
            justify-content: center;
            gap:1rem;
          }
          .type{
            display: flex;
            width: 3rem;
            height: 3rem;
            place-content: center;
            align-items: center;
            border-radius: 50%;
            font-weight: bold;
            color: white;
          }
          .type.debit{
            background: red;
          }
          .type.credit{
            background: green;
          }
          .info{
            display:flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .info p{
            margin: 0;
            color: gray;
          }
          .debit-amount{
            font-size: 1.2rem;
            color: red
          }
          .credit-amount{
            font-size: 1.2rem;
            color: green
          }
          .right{
            display:flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .right p{
            margin: 0;
            color: red;
          }

          ` }</style>
    </div>
  )
}
