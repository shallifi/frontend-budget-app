import React, { } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';


function EditBillModal({item, show, handleClose}) {
    
   
    

    const initialData={
        company_name:item.company_name,
        min_payment:item.min_payment,
        payoff_amount:item.payoff_amount,
        payment:item.payment
    };
    
    const history = useHistory();
    const {formData, setFormData, handleChange} = useForm(initialData)
    const { id } = useParams();

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
          fetch(`/bills/${id}`, configObj)
            .then((resp) => resp.json())
            .then((editBill) => {
                setFormData({
                    company_name:"",
                    min_payment:"",
                    payoff_amount:"",
                    payment:""
            });
          });
          handleClose();
          history.go();
        }

        // console.log("inside editmod", formData.min_payment)
  return (
    <Modal show={show} onHide={handleClose}>
    <Form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
          <Modal.Title>New Bill</Modal.Title>
      </Modal.Header> 
      <Modal.Body>
          <Form.Group className='mb-3' controlId="company_name">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text"
              key={formData.id} 
              name="company_name"
              onChange={handleChange} 
              value={formData.company_name} required/>
          </Form.Group>
          <Form.Group className='mb-3' controlId="min_payment">
              <Form.Label>Minimum Payment</Form.Label>
              <Form.Control type="number"
              key={formData.id} 
              name="min_payment"
              onChange={handleChange}
              value={formData.min_payment} required min={0} step={0.01}  />
          </Form.Group>
          <Form.Group className='mb-3' controlId="payoff_amount">
              <Form.Label>Payoff Amount</Form.Label>
              <Form.Control type="number"
              key={formData.id} 
              name="payoff_amount"
              onChange={handleChange}
              value={formData.payoff_amount} required min={0} step={0.01}  />
          </Form.Group>
          <Form.Group className='mb-3' controlId="payment">
              <Form.Label>Payment</Form.Label>
              <Form.Control type="number"
              key={formData.id} 
              name="payment"
              onChange={handleChange}
              value={formData.payment} min={0} step={0.01}  />
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

export default EditBillModal