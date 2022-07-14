import React, { useState } from 'react'

// {
//   id: 1,
//   receiver: "John Doe",
//   description: "Payment for the month of January",
//   amount: 100,
//   date: "2020-01-01 00:00:00",
//   trxType: "credit",
//   status: "pending"
// },


export default function TransactionCard({receiver, id, description, amount, date, trxType, status})
{
  return (
      <div className={trxType === "debit" ? 'Trx debit' : "Trx credit"}>
          <div className='left'>
              <div className={trxType === "debit" ? 'type debit' : "type credit"}>
                  {trxType === "debit" ? "DR" : "CR"}
              </div>
          <div className='info'>
              <strong className='receiver'>
                  {receiver}
              </strong>
              <p className='details'>
                  {description}
              </p>
          </div>
          </div>
          
          <div className='right'>
              <strong className={trxType === "debit" ? 'debit-amount' : "credit-amount"}>
                  ${amount}
              </strong>
        <span className={status === "failed" ? 'status failed' : status === "pending" ?'status pending' : 'status success'  }>
          <div className={status === "failed" ? 'circle failed' : status === "pending" ?'circle pending' : 'circle success'  }>
          </div>
                  {status}
              </span>
          </div>
          <style jsx="true">{`
          .Trx{
            cursor: pointer;
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
          .right .status{
            margin: 0;
            display:flex;
            justify-contents: space-between;
            align-items:center;
            column-gap:5px;
            text-transform: capitalize;
            font-size:14px;
          }
          .right .status.pending{
            color: gray;
          }
          .right .status.failed{
            color: red;
          }
          .right .status.success{
            color: green;
          }
          .right .status .circle{
            width: 10px;
            height:10px;
            border-radius:50%;
          }
          .right .status .circle.pending{
            background: gray;
          }
          .right .status .circle.failed{
            background: red;
          }
          .right .status .circle.success{
            background: green;
          }


          ` }</style>
    </div>
  )
}
