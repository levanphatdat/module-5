import Chart from "chart.js/auto";
import { listAll } from './service/chartService';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { useEffect, useState } from "react";
import { CategoryScale } from "chart.js";
import "bootstrap/dist/css/bootstrap.css";


Chart.register(CategoryScale);

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAppList = async () => {
      const chart = await listAll();
      setData(chart.data);
    };
    getAppList();
  },[])

  const chartData = {
    labels: data.map(data => data.year), 
    datasets: [
      {
        label: "Increase ",
        data: data.map((data) => data.incerase),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }
    ]
  }
 
  return (
    <div className="App">
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
      <LineChart chartData={chartData} />
    </div>
  );
}

export default App;
