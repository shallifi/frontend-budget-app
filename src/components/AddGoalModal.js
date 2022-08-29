import React, { } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';


function AddGoalModal({show, handleClose}) {
    
    const initialData={
        name_of_goal:"",
        goal_amount:""
    };
    const history = useHistory();
    
    const {formData, setFormData, handleChange} = useForm(initialData)


  // handling post
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( formData ),
    };
      fetch('/goals', configObj)
        .then((resp) => resp.json())
        .then((newGoals) => {
            setFormData({
            name_of_goal:"",
            goal_amount: ""

        });
      });
      handleClose();
      history.go();
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Goal</Modal.Title>
            </Modal.Header> 
            <Modal.Body>
                <Form.Group className='mb-3' >
                    <Form.Label>Name of Goal</Form.Label>
                    <Form.Control type="text"
                    key={formData.id} 
                    name="name_of_goal"
                    onChange={handleChange} 
                    value={formData.name_of_goal} required/>
                </Form.Group>
                <Form.Group className='mb-3'>
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

export default AddGoalModal