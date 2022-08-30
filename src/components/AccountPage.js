import React, { } from 'react'
import { Container, Card, ProgressBar } from 'react-bootstrap'
import { currencyFormatter } from '../utility'
// import Table from './Table'




function AccountPage({dataTable, goals}) {

console.log("accPage", goals)

const minPayMap = dataTable.map(mPay => mPay.min_payment)

const totalColumnMinPayment = minPayMap.reduce((acc, item) => (acc += item), 0);

// this reduce was able to be down on goals then at end put .goal_amount 
// works on arrays
const totalGoalAmounts = goals.reduce((acc, item) => (acc += item.goal_amount), 0);

const totalGoalPayment = goals.reduce((acc, item) => (acc += item.goal_payment), 0);

const budgetTotal = totalColumnMinPayment + totalGoalPayment


console.log("accpage reduce", budgetTotal)

function getProgressBarVariant(amount,max) {
  const ratio = amount / max
  if (ratio < .5) return "danger"
  if (ratio < .75) return "warning"
  return "primary"
}

  return (
    <>
      <header className="header_AccPage">Main page for budget</header>
        <Container>
 
      <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
              
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
             
              <div className='me-2'> Total Goal: Payments / Amounts </div>
               
              <div className='text-muted fs-6 ms-1'>{currencyFormatter.format(totalGoalPayment)} 
              <span className='d-flex align-items-baseline'>/ {currencyFormatter.format(totalGoalAmounts)} </span>
              </div>
            </Card.Title>
            <ProgressBar className='rounded-pill' variant={getProgressBarVariant(totalGoalPayment,totalGoalAmounts)}
              min={0}
              max={totalGoalAmounts}
              now={totalGoalPayment}/>
        </Card.Body>
    </Card>
      <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
              
              <div className='me-2'> Total Monthly Bills Minimum Payment</div>
                          
              <div className='d-flex align-items-baseline'>{currencyFormatter.format(totalColumnMinPayment)} 
              {/* <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format("")} </span> */}
              </div>
            </Card.Title>
          </Card.Body>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
            
              <div className='me-2'> Expenses coming soon </div>
                          
              <div className='d-flex align-items-baseline'>{currencyFormatter.format("")} 
              {/* <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format("")} </span> */}
              </div>
            </Card.Title>
          </Card.Body>
    </Card>
    <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
               
              <div className='me-2'> Total Monthly Budget </div>
                          
              <div className='d-flex align-items-baseline'>{currencyFormatter.format(budgetTotal)} 
              {/* <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format("")} </span> */}
              </div>
            </Card.Title>
        {/* <ProgressBar className='rounded-pill' variant={getProgressBarVariant(goal_payment,goal_amount)}
        min={0}
        max={goal_amount}
        now={goal_payment}/> */}
        </Card.Body>
    </Card>
     
      </Container>
      
      </>
  )
}

export default AccountPage