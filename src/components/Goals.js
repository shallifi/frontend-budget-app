import React, { useState } from 'react'
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import { useForm } from '../hooks/useForm';
import AddGoalModal from './AddGoalModal';
import GoalCard from './GoalCard';




function Goals({goals, setGoals, onDeleteGoals}) {
    // to show and hide modal by default it is not shown
    const [showAddGoalModal, setShowAddGoalModal] = useState(false)
  
    
    // const initialData={
    //     name_of_goal:"",
    //     goal_amount:""
    // };
    
    // const {formData, setFormData, } = useForm(initialData)
     //useEffect renders once per loading the page

    //  const renderGoalCardAmount = goals.map((goal) => (
    //     <div> {goal.goal_amount}</div> 
    //   ));
      const renderGoalCard = goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} /> 
      ));
 
      // console.log("goals", renderGoalCard)
  return (
    <>
        <Container className='my-5'>
            <Stack direction="horizontal" gap="3" className="mb-4">
                <h1 className='me-auto'>Goals</h1>
                <Button variant="primary" onClick={() => setShowAddGoalModal(true)} > Add Goal</Button>
                {/* <Button variant="outline-primary"> Add Money</Button> */}

            </Stack>
            <div style={{display:"grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
             gap: "1rem", alignItems: "flex-start"}}
             >
                
             </div>
        </Container>
       <h1>A list of your goals </h1>
        {renderGoalCard}

    {/* <GoalCard name={renderGoalCard} goals={goals} amount={200} max={1000}> </GoalCard> */}
    <AddGoalModal show={showAddGoalModal} handleClose={() => setShowAddGoalModal(false)} />

    </>
  )
}

export default Goals