import React, { useState } from 'react'
import { Button, Stack, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import AddBillModal from './AddBillModal';



function Bills() {
     // to show and hide modal by default it is not shown
     const [showAddBillModal, setShowAddBillModal] = useState(false)
     const [showEditBillModal, setShowEditBillModal] = useState(false)
    const history = useHistory();

     function handleDelete(id){
      fetch(`/bills/${id}`, {
          method: "DELETE", 
         
      })
      history.push("/bills")
      history.go()
    }

  return (
    <>
      <Container className='my-5'>
        <Stack direction="horizontal" gap="3" className="mb-4">
            <h1 className='me-auto'>Bills in stack</h1>
            <Button variant="primary" onClick={() => setShowAddBillModal(true)} > Add Bill</Button>
            <Button variant="outline-primary"> unknown right now</Button>

        </Stack>
      </Container>
        <Table handleDelete={handleDelete} show={showEditBillModal} handleClose={() => setShowEditBillModal(false)}/>
      <AddBillModal show={showAddBillModal} handleClose={() => setShowAddBillModal(false)} />
        
        </>
  )
}

export default Bills