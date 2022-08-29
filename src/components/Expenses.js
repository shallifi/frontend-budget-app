import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
// import { Doughnut } from 'react-chartjs-2'
import ExpForm from './additional comps/ExpForm';
import Graph from './additional comps/Graph'






function Expenses() {
    const [expenseType, setExpenseType] = useState();

    useEffect(() => {
        fetch('/expenditures')
          .then((res) => res.json())
          .then((data) => setExpenseType(data));
      }, [setExpenseType]);

    //   console.log("in expense", expenses)
  return (
    <>
    <Container>
        <Col>
       <Graph/>
        </Col>
        <Col>
       <ExpForm expenseType={expenseType} setExpenseType={setExpenseType}/>
        
        </Col>

    
        Expenses from expense component

   

    </Container>
    
    </>
  )
}

export default Expenses