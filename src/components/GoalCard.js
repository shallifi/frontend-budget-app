import React, { useState } from 'react'
import { Card, ProgressBar,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { currencyFormatter} from '../utility'
import EditGoalModal from './EditGoalModal';



function GoalCard({goal,user}) {
  // const [amount, setAmount] = useState(0);
  const [showEditGoalModal, setshowEditGoalModal] = useState(false)

  
  // const { id } = useParams();
  const history = useHistory();

    console.log("above in goalcard", goal)

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
    
    // console.log("goalCard", goal)
    const {name_of_goal, goal_amount,goal_payment} = goal
    // console.log(setAmount)
    console.log("after deconstr", goal_amount)

    // const totalGoals = 

  return (
    <>
    <Card className='mb-3'>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal '>
              {/* {JSON.stringify(name_of_goal)}
              {JSON.stringify(goal_amount)} */}
            <div className='me-2'> {name_of_goal} </div>
                        
            <div className='d-flex align-items-baseline me-2'> 
            {currencyFormatter.format(goal_payment)} 
            <span className='text-muted fs-6 mr-1'>/ {currencyFormatter.format(goal_amount)} </span>
            <Button className='m-2'onClick={() => setshowEditGoalModal(goal.id)}>Edit</Button>
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