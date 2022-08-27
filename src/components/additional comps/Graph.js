import React from 'react'
import { Doughnut} from 'react-chartjs-2'
// import { useForm } from '../../hooks/useForm';
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

function Graph() {

    
    
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 100, 100],
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
            <div className='chart relative'>
            <canvas id="myChart"></canvas>
                <Doughnut data={data}></Doughnut>
                <h3 className='doughnut title'>Total</h3>
            

            </div>
        </div>

        Graph
        
    </div>
  )
}

export default Graph