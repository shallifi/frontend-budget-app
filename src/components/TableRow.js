import { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import EditBillModal from "./EditBillModal";




function TableRow ({ show, item, column}) {
const [showEditBillModal, setShowEditBillModal] = useState(false);
const history = useHistory();

function handleDelete(id){
    fetch(`/bills/${id}`, {
        method: "DELETE", 
       
    })
    history.push("/bills")
    history.go()
  }
  


  // const testAmounts = item.map(minpay => minpay.min_payment);


  // const totals = item.min_payment 

  // const totalColumn = totals.reduce(function (acc, obj){return acc + obj;},0);
  
  // const aveTotal = (totals) => {
  //   const sum = totals.reduce((prev,curr) => prev + curr, 0)
  //   return sum / totals.length
  // }




  // console.log("intablerow comp",)


  
  
  

  return  (<>
    <tr>
        {column.map((columnItem, index) =>{
            return <td>{item[`${columnItem.value}`]}</td>
        })}
            <button className='me-2'onClick={() => setShowEditBillModal(item.id)}>Edit</button>
            <button className='me-2' onClick={()=>handleDelete(item.id)} >Delete</button>
    </tr>
    <EditBillModal item={item} show={showEditBillModal} handleClose={() => setShowEditBillModal(false)} />
  
    </>)
    
}

export default TableRow;