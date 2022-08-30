import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
// import { Doughnut } from 'react-chartjs-2'
import ExpForm from './additional comps/ExpForm';
import Graph from './additional comps/Graph'
import ListOfDebits from './additional comps/ListOfDebits';







function Expenses({user}) {

  const [userExpenditure, setUserExpenditure] = useState([]);
  
  useEffect(() => {
    fetch('/user_expenditures')
      .then((res) => res.json())
      .then((data) => setUserExpenditure(data));
  }, [setUserExpenditure]);

  // console.log("expensesPage", userExpenditure)

  // const {description, expense_amount} = userExpenditure
  // console.log("ep after decon", description)

  const descOfUserExp = userExpenditure.map(data => data.description)

  // console.log("ep map try", descOfUserExp)

  const renderListCard = userExpenditure.map((expenseObj) => (
   <ListOfDebits key={expenseObj.id} expenseObj={expenseObj} /> 
 )); 

    if (!userExpenditure.length ) return <h1>...loading</h1>
  return (
    <>
    <Container>
        <Col>
       <Graph/>
        </Col>
        <Col>
       <ExpForm user={user}/>
        
        {/* <ListOfDebits  userExpenditure={userExpenditure}/> */}
        </Col>
        Expenses from expense component
        
   

    </Container>
    {renderListCard}
    
    </>
  )
}

export default Expenses