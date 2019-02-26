import React, { Component } from 'react';
import Chart from 'chart.js/dist/Chart';

class PolarChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      componentDidMount() {
        var ctx = "myChart";
        // eslint-disable-next-line
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ["Motivation", "Fidélité", "Lifestyle", "Intégration", "Non besoin de réorientation"],
                datasets: [{
                    label: this.props.name,
                    data: [this.props.score.motivation,this.props.score.fidelity,this.props.score.lifestyle,this.props.score.integration,this.props.score.noOrientation],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scale: {
                    display: true
                  }
            }
        });
      }
    

      onChange = (e) => {
      }
        
      render() {
        return (
          <div class="text-center">
            <canvas id="myChart" height="400" width="400"></canvas>
          </div>
        );}
}

export default PolarChart;