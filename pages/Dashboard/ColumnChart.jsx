import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { periodData } from '../../src/data';

const ColumnChart = ({dataColors, periodData}) => {


    const options =  {
              chart: {
                height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  borderRadius: 2,
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: false,
                formatter: function (val) {
                  return val + "%";
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              
              xaxis: {
                show: true,
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels:{
                    show: true,
                },
                position: 'bottom',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              },

              colors:dataColors,
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              
              },
              title: {
                text: 'Monthly Inflation in Argentina, 2002',
                floating: true,
                offsetY: 0,
                align: 'center',
                style: {
                  color: '#3a3a3a'
                }
              }
            };
          
          
            return (
              <>
                <ReactApexChart
                options={options}
series={[...periodData]}
type="bar"
height={350}
className = "apex-charts"
                />
              </>
            );
          };
        


export default ColumnChart;