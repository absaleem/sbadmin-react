import React from "react";
import {Doughnut } from "react-chartjs-2";
import {Charts as Chartjs} from "chart.js/auto";


function Doughnutcharts({charData}){
return  <Doughnut data={charData}  />
}

export default Doughnutcharts;