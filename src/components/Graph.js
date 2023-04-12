import react from "react";
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import '../App.css'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x-axis
    LinearScale, // y-axis
    PointElement,
    Legend,
    Tooltip
} from 'chart.js';
// import { Tooltip } from "chart.js/dist";

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale, 
    PointElement,
    Legend,
    Tooltip
)

const Graph = () => {
    const data1 = {
        labels:['Jan','Feb','March','April'],
        datasets:[{
                label: 'Priya',
                borderWidth: 1,
                pointRadius: 2,
                data: [6,3,9,1],
                backgroundColor: 'auqa',
                borderColor: 'red',
                pointBorderColor: 'red',
                fill: false,
                tension: 0.4
            },{
                label: 'Ayush',
                borderWidth: 1,
                pointRadius: 2,
                data: [2,7,0,5],
                backgroundColor: 'auqa',
                borderColor: 'blue',
                pointBorderColor: 'blue',
                fill: false,
                tension: 0.4
            }
        ]
    }
    const options = {
        plugins:{
            legend: true
        },
        scales:{
            y:{
                min: 0,
                max: 12
            }
        }
    }
    return(
        <div style={{width:'650px', height:'350px', borderStyle:'groove', margin:'10px'}}>
            {/* <h1> Graph </h1> */}
            <div style={{
                width:'600px',
                height:'300px',
                padding:'20px'
            }}>
                <Line data={data1} options={options}/> 
            </div>
        </div>
    );
};

export default Graph;