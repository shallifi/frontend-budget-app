import React from 'react'



function LabelForCircle() {

    

    
    function labelComponent(){
        return (
            <div className='labels flex justify-between'>
                <div className='flex gap-2'>
                    <div className='label text cir' style={{background:"#f9c74f"}}></div>
                    <h3 className='text-md'> Savings</h3>
                </div>
                <h3 className='font-bold'> 45%</h3>
            </div>
        )
        

    }
    

  return (
    <>
        {labelComponent()}
    
    <div>LabelForCircle</div>
    </>

    
  )
}

export default LabelForCircle