import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import { currencyFormatter } from '../utility'
// import Table from './Table'
import { Table} from './Table'



function AccountPage({dataTable}) {

console.log("accPage", dataTable)

const minPayMap = dataTable.map(mPay => mPay.min_payment)

const totalColumnMinPayment = minPayMap.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <header>Main page for budget</header>
        <Container>
      <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
                {/* {JSON.stringify(name_of_goal)}
                {JSON.stringify(goal_amount)} */}
              <div className='me-2'> Total Budget </div>
                          
              <div className='d-flex align-items-baseline'>{currencyFormatter.format("")} 
              {/* <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format("")} </span> */}
              </div>
            </Card.Title>
        {/* <ProgressBar className='rounded-pill' variant={getProgressBarVariant(goal_payment,goal_amount)}
        min={0}
        max={goal_amount}
        now={goal_payment}/> */}
        </Card.Body>
    </Card>
      <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
                {/* {JSON.stringify(name_of_goal)}
                {JSON.stringify(goal_amount)} */}
              <div className='me-2'> Monthly Income </div>
                          
              <div className='d-flex align-items-baseline'>{currencyFormatter.format("")} 
              {/* <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format("")} </span> */}
              </div>
            </Card.Title>
          </Card.Body>
    </Card>
      <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
                {/* {JSON.stringify(name_of_goal)}
                {JSON.stringify(goal_amount)} */}
              <div className='me-2'> Monthly Bills Minimum Payment</div>
                          
              <div className='d-flex align-items-baseline'>{currencyFormatter.format(totalColumnMinPayment)} 
              {/* <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format("")} </span> */}
              </div>
            </Card.Title>
          </Card.Body>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
                {/* {JSON.stringify(name_of_goal)}
                {JSON.stringify(goal_amount)} */}
              <div className='me-2'> Expenses </div>
                          
              <div className='d-flex align-items-baseline'>{currencyFormatter.format("")} 
              {/* <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format("")} </span> */}
              </div>
            </Card.Title>
          </Card.Body>
    </Card>
     
      </Container>
      <Container>GOALS</Container>
      </>
  )
}

export default AccountPage