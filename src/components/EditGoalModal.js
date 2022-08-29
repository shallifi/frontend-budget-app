import React, { } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
// import { currencyFormatter} from '../utility'




function EditGoalModal({goal, show, handleClose}) {
    
  // console.log("inside goalmodal", goal);
    const initialData={
        name_of_goal:goal["name_of_goal"],
        goal_payment:goal.goal_payment,
        goal_amount:goal.goal_amount
    };
   const history = useHistory();
    
    // console.log("in editmodal", goal.goal_payment)

    const {formData, setFormData, handleChange} = useForm(initialData)
//   function handleSubmit(e){}

  // handling post
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("egm inside ",formData)
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( formData ),
    };
      fetch(`/goals/${goal.id}`, configObj)
        .then((resp) => resp.json())
        .then((editGoal) => {
            setFormData({
            name_of_goal:"",
            goal_amount: "",
            goal_payment:""

        });
      });
      
      history.go();
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
                <Form.Group className='mb-3' controlId="goal_payment">
                    <Form.Label>Goal Payment $</Form.Label>
                    <Form.Control type="number"
                    key={formData.id} 
                    name="goal_payment"
                    onChange={handleChange}
                    value={formData.goal_payment}  required min={0} step={1.00}  />
                </Form.Group>
                <Form.Group className='mb-3' controlId="name">
                    <Form.Label>Goal Amount $</Form.Label>
                    <Form.Control type="number"
                    key={formData.id} 
                    name="goal_amount"
                    onChange={handleChange}
                    value={formData.goal_amount}  required min={0} step={1.00}  />
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