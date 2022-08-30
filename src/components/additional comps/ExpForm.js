import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
// import ListOfDebits from './ListOfDebits';





function ExpForm({renderListCard, user}) {
  

  // const idRef = useRef("");
  
  const initialData={
    user_id:user.id,
    expenditure_id: "",
    description: "",
    expense_amount:""   
  };
  const {formData, setFormData, handleChange} = useForm(initialData)
  const [expenseType, setExpenseType] = useState([]);
  

  useEffect(() => {
      fetch('/expenditures')
        .then((res) => res.json())
        .then((data) => setExpenseType(data));
    }, [setExpenseType]);

    // console.log("in expense", expenseType)
  

    

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
    fetch('/user_expenditures', configObj)
      .then((resp) => resp.json())
      .then((newExpense) => {
          setFormData({
            user_id:"",
            expenditure_id: "",
            description: "",
            expense_amount:"" 
      });
    });
  
    
  }

  // const newMap = expenseType.map((option) => option.id)


  console.log("expform listcard", formData)



  return (
  
    <>
        
       <h1>Transaction</h1>
       <Form onSubmit={handleSubmit}>
        <Form.Select className="select" name="expenditure_id" onChange={handleChange}>
          <option > select a type</option>
          {expenseType.map((option) => 
            <option key={(option.id)} value={option.id}>
              {option.type_of_expense}
            </option>
          )} 
        </Form.Select> 

        {/* <select className="select" name="expenditure_id" value={parseInt(formData.expenditure_id)} onChange={handleChange}>
        <option > select a type</option>
          {expenseType.map((option) => 
            <option key={(option.id)} value={option.id}>
              {option.type_of_expense}
            </option>
          )} 
        </select>
         */}
          <Form.Group className='mb-3' controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                    key={formData.id} 
                    name="description"
                    onChange={handleChange} 
                    value={formData.description ??""} required/>
                </Form.Group>

                <Form.Group className='mb-3' controlId="expense_amount">
                    <Form.Label>Add Expense $</Form.Label>
                    <Form.Control type="number"
                    key={formData.id} 
                    name="expense_amount"
                    onChange={handleChange}
                    value={formData.expense_amount ??""}  required min={0} step={1.00}  />
                </Form.Group>

        
        
        {/* <input type="number" value="expense_amount"placeholder='Amount spent$'></input> */}
        <Button variant='primary' type='submit'> add expense</Button>

        </Form>
            list of Debits on ExpForm for list
               {renderListCard}
      

        
        </>
  )
}

export default ExpForm