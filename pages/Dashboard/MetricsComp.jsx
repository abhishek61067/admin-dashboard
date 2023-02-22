import ReactApexChart from "react-apexcharts";
import {Card} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from 'react'

const MetricsComp = () => {
const series = [44, 55, 67, 83];

            const options  = {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                      }
                    }
                  }
                }
              },
              labels: ['Com', 'Mob', 'Lap', 'Ipad'],
              colors:["#99ffff","#88ee88", "#BFD2BF", "#55aaff" ]
            };
          
            return (
<Card>
    <div className="text-center">
<h5>Views</h5>
<div className="d-flex justify-content-center">
    <h3 className="m-0">40,000</h3>
    <div className="d-flex align-items-end px-2">
        <FontAwesomeIcon icon="fa-solid fa-caret-up" color="green"/>
        <span className="text-success">30%</span>
    </div>
</div>
    <ReactApexChart
    options={options}
    series = {series}
    type = "radialBar"
    height = "230"
    className = "apex-charts"
    />
    </div>
</Card>
    );
          
          };



  


export default MetricsComp;