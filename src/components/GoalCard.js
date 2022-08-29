import React, { useState } from 'react'
import { Card, ProgressBar,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { currencyFormatter} from '../utility'
import EditGoalModal from './EditGoalModal';



function GoalCard({goal}) {
  // const [amount, setAmount] = useState(0);
  const [showEditGoalModal, setshowEditGoalModal] = useState(false)

  // const { id } = useParams();
  const history = useHistory();

    // console.log("above in goalcard", goal.goal_payment)
    function getProgressBarVariant(amount,max) {
        const ratio = amount / max
        if (ratio < .5) return "danger"
        if (ratio < .75) return "warning"
        return "primary"
    }

    function handleDelete(id){
      fetch(`/goals/${id}`, {
          method: "DELETE", 
         
      })
      history.push("/goals")
      history.go()
    }
    
    const {name_of_goal, goal_amount,goal_payment} = goal
    // console.log(setAmount)
    // console.log(id)

  return (
    <>
    <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
              {/* {JSON.stringify(name_of_goal)}
              {JSON.stringify(goal_amount)} */}
            <div className='me-2'> {name_of_goal} </div>
                        
            <div className='d-flex align-items-baseline'> 
            {currencyFormatter.format(goal_payment)} 
            <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format(goal_amount)} </span>
            <Button className='me-2'onClick={() => setshowEditGoalModal(goal.id)}>Edit</Button>
            <Button className='me-2' onClick={()=>handleDelete(goal.id)} >Delete</Button>
            </div>
   

        </Card.Title>
        <ProgressBar className='rounded-pill' variant={getProgressBarVariant(goal_payment,goal_amount)}
        min={0}
        max={goal_amount}
        now={goal_payment}/>
    </Card.Body>
    </Card>
    <EditGoalModal goal={goal} show={showEditGoalModal} handleClose={() => setshowEditGoalModal(false)} />
    </>
  )
}

export default GoalCard