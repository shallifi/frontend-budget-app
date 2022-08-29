import { useState } from "react";
// import { Form } from "react-bootstrap";
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