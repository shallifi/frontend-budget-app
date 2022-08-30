import { Card } from "react-bootstrap";
// import ExpForm from "./ExpForm";
// import { currencyFormatter } from "../../utility";
// import ExpForm from "./ExpForm";
import Expenses from "../Expenses";


function ListOfDebits({expenseObj}) {
    
    
    
    // console.log("listofdebits",expenseObj)
       
    
    const {expense_amount, description} = expenseObj

    // console.log("trying decon in List", expense_amount)

    //    const renderListCard = userExpenditure.map((userExpCardInfo) => (
    //     <ListOfDebits key={userExpCardInfo.id} userExpCardInfo={userExpCardInfo} /> 
    //   )); 
    

    // const descOfUserExp = userExpCardInfo.map(data => data.description)

    // console.log("mapofdesc", expense_amount)

    return(
        <>
      
     <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
          
                <div className='me-2'> {description}</div>
                            
                <div className='d-flex align-items-baseline'> {expense_amount} </div>
    

                </Card.Title>
        
            </Card.Body>
        </Card>
            {/* {renderListCard} */}
        {/* <Expenses renderListCard={renderListCard} /> */}
    </>
       
        

    )
}


export default ListOfDebits;