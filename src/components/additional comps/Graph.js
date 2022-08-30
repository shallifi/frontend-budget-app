import React from 'react'
import { Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
// import { useForm } from '../../hooks/useForm';
// import LabelForCircle from './LabelForCircle';


Chart.register(ArcElement);

function Graph({expenses, setExpenses}) {
   
    // gives color to the bands in the doughnut
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [200, 100, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
          borderRadius: 15,
          spacing: 2
        }]
      };

  return (
    <div className=''>
        <div className='item'>
            <div >
            <canvas id="myChart"></canvas>
                <Doughnut data={data}></Doughnut>
                <h3 className='doughnut title'>Total
                <span>${0}</span>
                </h3>
            </div>
            <div className='flex flex-col py-10 gap-4'>
            
            {/* <LabelForCircle></LabelForCircle> */}

            </div>
        </div>

  
        
    </div>
  )
}

export default Graph