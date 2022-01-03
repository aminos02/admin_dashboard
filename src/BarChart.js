import React from 'react'
import { PolarArea,Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';   //Dont remove this Line ;you will get an error if y remove it


const BarChart = () => {
  return (
    <div className="graphBox">
      <div className='box'>
        <PolarArea data={
          {
            labels: ['Facebook', 'Amazon', 'Youtube'],
            datasets: [{
                label: 'Views',
                data: [1200, 1900, 3000],
                backgroundColor: [
                    'rgba(255, 99, 132, .7)',
                    'rgba(54, 162, 235, .7)',
                    'rgba(255, 206, 86, .7)',
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
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
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