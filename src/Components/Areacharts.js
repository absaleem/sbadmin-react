import React from "react";
import {Line } from "react-chartjs-2";
import {Charts as Chartjs} from "chart.js/auto";


function Areacharts({charData}){
return  <Line data={charData}  />
}

export default Areacharts;