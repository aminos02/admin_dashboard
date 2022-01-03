import React from 'react'
import { PolarArea,Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';   //Dont remove this Line ;you will get an error if y remove it


const BarChart = () => {
  return (
    <div className="graphBox">
      <div className='box'>
        <PolarArea data={
          {
            labels: ['Facbook', 'Amazon', 'Youtube'],
            datasets: [{
                label: 'Views',
                data: [1200, 1900, 3000],
                backgroundColor: [
                    'rgba(255, 99, 132, .5)',
                    'rgba(54, 162, 235, .5)',
                    'rgba(255, 206, 86, .5)',
                ],
               
                borderWidth: 1
            }]
        }
        
        }
        options={{responsive:true}}/>

      </div>
      <div className='box'>
        <Bar data={
          {
            labels: ['January', 'February', 'March','April','May','Juin','July','August','September','October','November','December'],
            datasets: [{
                label: 'Earnings',
                data: [450, 330, 560,710, 210, 300,400, 500,450,420, 500,602],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
               
                borderWidth: 1
            }]
        }
        
        }
        options={{responsive:true ,}}/>

      </div>
     </div> 
  )
}



export default BarChart;