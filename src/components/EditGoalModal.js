import React, { } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';




function EditGoalModal({show, handleClose}) {
    
    const initialData={
        name_of_goal:"",
        goal_amount:""
    };
    const { id } = useParams();

    // console.log("in editmodal", name_of_goal)

    const {formData, setFormData, handleChange} = useForm(initialData)
//   function handleSubmit(e){}

  // handling post
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( formData ),
    };
      fetch(`/goals/${id}`, configObj)
        .then((resp) => resp.json())
        .then((editGoal) => {
            setFormData({
            name_of_goal:"",
            goal_amount: ""

        });
      });
     
    }

  
    return (
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Goal</Modal.Title>
            </Modal.Header> 
            <Modal.Body>
                <Form.Group className='mb-3' controlId="name_of_goal">
                    <Form.Label>Name of Goal</Form.Label>
                    <Form.Control type="text"
                    key={formData.id} 
                    name="name_of_goal"
                    onChange={handleChange} 
                    value={formData.name_of_goal} required/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="name">
                    <Form.Label>Goal Amount</Form.Label>
                    <Form.Control type="number"
                    key={formData.id} 
                    name="goal_amount"
                    onChange={handleChange}
                    value={formData.goal_amount} required min={0} step={0.01}  />
                </Form.Group>
                {/* putting button in div to be able to put at end  */}
                <div className="d-flex justify-content-end">
                    <Button variant='primary' type='submit'>ADD</Button>
                </div>
                </Modal.Body>
            </Form>  
        </Modal>
  
  )
}

export default EditGoalModal