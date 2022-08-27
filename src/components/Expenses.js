import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2'
import ExpForm from './additional comps/ExpForm';
import Graph from './additional comps/Graph'






function Expenses() {
    const [expenses, setExpenses] = useState();

    useEffect(() => {
        fetch('/expenditures')
          .then((res) => res.json())
          .then((data) => setExpenses(data));
      }, [setExpenses]);

    //   console.log("in expense", expenses)
  return (
    <>
    <Container>
        <Col>
       <Graph expenses={expenses} setExpenses={setExpenses}/>
        </Col>
        <Col>
       <ExpForm></ExpForm>
        
        </Col>

    
        Expenses from expense component

   

    </Container>
    
    </>
  )
}

export default Expenses