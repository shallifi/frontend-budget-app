import { Card,Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";




function ListOfDebits({expenseObj}) {
    
    
    const history = useHistory();
    // console.log("listofdebits",expenseObj)
       
    
    const {expense_amount, description} = expenseObj

    // console.log("trying decon in List", expense_amount)

    //    const renderListCard = userExpenditure.map((userExpCardInfo) => (
    //     <ListOfDebits key={userExpCardInfo.id} userExpCardInfo={userExpCardInfo} /> 
    //   )); 
    

    // const descOfUserExp = userExpCardInfo.map(data => data.description)
    function handleDelete(id){
        fetch(`/user_expenditures/${id}`, {
            method: "DELETE", 
           
        })
        history.push("/expenses")
        history.go()
      }

    console.log("mapofdesc", expense_amount)

    return(
        <>
        
     <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
          
                <div className='me-2'> {description}</div>
                            
                <div className='d-flex align-items-baseline'> {expense_amount} </div>
    
                <Button className='me-2' onClick={()=>handleDelete(expenseObj.id)} >Delete</Button>
                </Card.Title>
        
            </Card.Body>
        </Card>
            {/* {renderListCard} */}
        {/* <Expenses renderListCard={renderListCard} /> */}
    </>
       
        

    )
}


export default ListOfDebits;