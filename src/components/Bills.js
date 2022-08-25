import React, { useState } from 'react'
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBillModal from './AddBillModal';


function Bills() {
     // to show and hide modal by default it is not shown
     const [showAddGoalModal, setShowAddGoalModal] = useState(false)
    
  return (
    <>
      <Container className='my-5'>
        <Stack direction="horizontal" gap="3" className="mb-4">
            <h1 className='me-auto'>Bills in stack</h1>
            <Button variant="primary" onClick={() => setShowAddGoalModal(true)} > Add Bill</Button>
            <Button variant="outline-primary"> unknown right now</Button>

        </Stack>
      </Container>
        
      <AddBillModal show={showAddGoalModal} handleClose={() => setShowAddGoalModal(false)} />
        
        </>
  )
}

export default Bills