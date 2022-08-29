import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';




function ExpForm({expenseType}) {
  
  const initialData={
    user:"",
    type_of_expense: "",
    description: "",
    expense_amount:""   
  };
  const {formData, setFormData, handleChange} = useForm(initialData)
  

  useEffect(() => {
    fetch('/user_expenditures')
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, [setFormData]);
    


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
            user:"",
            type_of_expense: "",
            description: "",
            expense_amount:""
      });
    });
  
    // history.go();
  }
  // expenses.map((edp) => console.log(edp))

  // const mapForType = expenseType.map(toe => toe.type_of_expense)

console.log("expform",expenseType)

  return (
  
    <div>
        
       <h1>Transaction</h1>
       <Form onSubmit={handleSubmit}>
    
        <Form.Select name="type_of_expense" onChange={handleChange}>
            <option value="food" defaultValue>food </option>
            <option value="miscellanous" >miscellanous </option>
            <option value="gasoline" >gasoline </option>
            <option value="savings" >savings </option>
            <option value="investments" >investments </option>
        </Form.Select>
        
        {/* <Form.Select className="select" name="type_of_expense" onChange={handleChange}>
          <option value="type_of_expense"> select a type</option>
          {expenseType.map((option, index) => 
            <option key={index} value={option.type_of_expense ??""}>
              {option.type_of_expense}
            </option>
          )} 
        </Form.Select>  */}
        
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



        
        </div>
  )
}

export default ExpForm