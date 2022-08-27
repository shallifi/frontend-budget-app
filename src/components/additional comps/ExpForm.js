import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm'



function ExpForm() {

  
    
    const initialData={
      type_of_expense: "",
      description: "",
      expense_amount:""   
    };
    

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
      .then((newExpense) => {
          setFormData({
            type_of_expense: "",
            description: "",
            expense_amount:""  
      });
    });
    // handleClose();
    // history.go();
  }

  return (

    <div>
        
       <h1>Transaction</h1>
       <Form onSubmit={handleSubmit}>
        <select name="type_of_expense" onChange={handleChange}>
            <option value="food" defaultValue>food </option>
            <option value="miscellanous" >miscellanous </option>
            <option value="gasoline" >gasoline </option>
            <option value="savings" >savings </option>
            <option value="investments" >investments </option>
        </select>
        
        <input type="text" value="description" placeholder='description'></input>
        <input type="number" value="expense_amount"placeholder='Amount spent$'></input>
        <Button> add expense</Button>

        </Form>



        
        </div>
  )
}

export default ExpForm