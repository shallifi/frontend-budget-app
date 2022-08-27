import React from 'react'
import { useForm } from '../../hooks/useForm'


function ExpForm() {
    
    const initialData={
   
    };
    

const {formData, setFormData, handleChange} = useForm(initialData)


  return (

    <div>
        
       <h1>Transaction</h1>

        <select name="expenses" onChange={handleChange}>
            <option value="miscellanous" defaultValue>miscellanous </option>
            <option value="food" defaultValue>food </option>
            <option value="gasoline" defaultValue>gasoline </option>
            <option value="savings" defaultValue>savings </option>
            <option value="investments" defaultValue>investments </option>
        </select>
        
        <input type="text" value="description" placeholder='description'></input>
        <input type="number" placeholder='Amount spent$'></input>



        
        </div>
  )
}

export default ExpForm