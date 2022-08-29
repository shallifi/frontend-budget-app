import React from 'react'
import { Card } from 'react-bootstrap'



function LabelForCircle() {
    const obj = [
        {
            type:"food",
            color:"#ff0000",
            percent:45
        },
        {
            type:"miscellanous",
            color:"#ffff00",
            percent:10
        },
        {
            type:"gasoline",
            color:"#008000",
            percent:20
        },
        {
            type:"savings",
            color:"#0000ff",
            percent:10
        },
        {
            type:"investments",
            color:"#ffa500",
            percent:5
        }

    ]

    
    
    
    
    
    return (
        <>
        {/* {obj.map((v,i)=> <LabelComponent key={i} data={v}></LabelComponent>)}
            {LabelComponent()} */}

    
            <div>LabelForCircle</div>
    </>
    )
}
function LabelComponent({data}){
    if(!data) return<></>;
    return (
        <Card>
            <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
        <div className='me'>
            
                <div className='me-2' style={{background:data.color??"#f9c74f"}}></div>
                <h3 className='me-2'> {data.type??''}</h3>
            
            <h3 className='d-flex align-items-baseline'>{data.percent??0}</h3>
        </div>
            </Card.Title>
        </Card.Body>
        </Card>
    )
        

}


export default LabelForCircle