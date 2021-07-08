import React from "react";
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class Plot2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xAxis: [],
      yAxis: [],
      stockName : 'IBM'
    }
  }

  componentDidMount() {
    this.getStock();
  }

  getStock() {
    const statePointer = this;
    //console.log(statePointer);
    const API_KEY = 'Y2RTJJXX4DH0GUSN';
    let API_Call2 = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.stockName}&apikey=${API_KEY}`;
    let xAxisFunction = [];
    let yAxisFunction = [];

      fetch(API_Call2)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Monthly Time Series']) {
            xAxisFunction.push(key);
            yAxisFunction.push(data['Monthly Time Series'][key]['2. high']);
          }

          statePointer.setState({
            xAxis: xAxisFunction,
            yAxis: yAxisFunction
          });
        }
      )
  }

  render() {
    return (
      <div className="card card-chart">
        <h4>{this.state.stockName} Monthly Series</h4>
        <Plot
          data={[
            {
              x: this.state.xAxis,
              y: this.state.yAxis,
              marker: {color: 'blue'},
              type: 'bar',
              mode: 'lines',
            }
          ]}
          layout={{height: 300,width: 420}}
        />
      </div>
    )
  }
}
export default Plot2;