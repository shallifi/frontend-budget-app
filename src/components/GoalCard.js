import React, { useState } from 'react'
import { Card, ProgressBar } from 'react-bootstrap';
import { currencyFormatter} from '../utility'

function GoalCard({goal}) {
  const [amount, setAmount] = useState(0);

  // const amount = 10
    console.log("above in goalcard", goal)
    function getProgressBarVariant(amount,max) {
        const ratio = amount / max
        if (ratio < .5) return "primary"
        if (ratio < .75) return "warning"
        return "danger"
    }

    console.log("before render map",goal)



    // console.log("goalcard",goals)
    const {name_of_goal, goal_amount} = goal
    // console.log(name_of_goal)

  return (
    <>
    <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
              {/* {JSON.stringify(name_of_goal)}
              {JSON.stringify(goal_amount)} */}
            <div className='me-2'> {name_of_goal} </div>
            {/* doing .format(amount) can pass in amount */}
                        
            <div className='d-flex align-items-baseline'> 
            {currencyFormatter.format(amount)} 
            <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format(goal_amount)} </span></div>
   

        </Card.Title>
        <ProgressBar className='rounded-pill' variant={getProgressBarVariant(amount,goal_amount)}
        min={0}
        max={goal_amount}
        now={amount}/>
    </Card.Body>
    </Card>
        
    </>
  )
}

export default GoalCard