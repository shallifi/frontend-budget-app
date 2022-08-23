import React, { useEffect } from 'react'
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import GoalCard from './GoalCard';



function Goals() {
    
    
     //useEffect renders once per loading the page
     useEffect(() => {
        fetch('/goals')
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, []);


  return (
    <>
        <Container className='my-5'>
            <Stack direction="horizontal" gap="3" className="mb-4">
                <h1 className='me-auto'>Goals</h1>
                <Button variant="primary"> Add Goal</Button>
                <Button variant="outline-primary"> Add Money</Button>

            </Stack>
            <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}></div>
        </Container>

    <GoalCard name=" testing" amount={200} max={1000}> </GoalCard>

    </>
  )
}

export default Goals