import React,{useState} from "react";
import { UserData } from "./Userdata";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

import {
    Chart as ChartJS,
  } from 'chart.js';
import Barcharts from "./Components/Barcharts";
import Areacharts from "./Components/Areacharts";
import Doughnutcharts from "./Components/Doughnutcharts";

function Charts(){    
 
    const [userData,setUserdata]=useState({
        labels: UserData?.map((data1) => data1.year),
        datasets: [{
                        label: "Users Gained",
                        lineTension: 0.3,
                        backgroundColor: "rgba(78, 115, 223, 0.05)",
                        borderColor: "rgba(78, 115, 223, 1)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgba(78, 115, 223, 1)",
                        pointBorderColor: "rgba(78, 115, 223, 1)",
                        pointHoverRadius: 3,
                        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                        pointHitRadius: 10,
                        pointBorderWidth: 2,
                        backgroundColor: "#4e73df",
                        hoverBackgroundColor: "#2e59d9",
                        borderColor: "#4e73df",
                        data: UserData.map((data2)=>data2.userGain),
                  }]
    });

    
    return (
            <>
               <div id="wrapper">
    <Sidebar/>  
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
       <Topbar/>
 
            <div className="container-fluid">

<h1 className="h3 mb-2 text-gray-800">Charts</h1>
<p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
    The charts below have been customized - for further customization options, please visit the <a
        target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
        documentation</a>.</p>

<div className="row">

    <div className="col-xl-8 col-lg-7">

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div className="card-body">
                <div className="chart-area">
                <Areacharts charData={userData}/>
                </div>
                <br/><br/><br/><hr/>
                Styling for the area chart can be found in the
                <code>/js/demo/chart-area-demo.js</code> file.
            </div>
        </div>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
            </div>
            <div className="card-body">
                <div className="chart-bar">
                   <Barcharts charData={userData}/>
                </div>
                <br/><br/><br/>
                <hr/>
                Styling for the bar chart can be found in the
                <code>/js/demo/chart-bar-demo.js</code> file.
            </div>
        </div>

    </div>

    <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
            <div className="card-body">
                <div className="chart-pie pt-4">
                <Doughnutcharts charData={userData}/>
                </div>
                <br/> <br/> <br/><br/>
                <hr/>
                Styling for the donut chart can be found in the
                <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
        </div>
    </div>
</div>
</div>
<Footer/>
    </div> 
       </div> 
    </div>
            </>

    );
}

export default Charts;