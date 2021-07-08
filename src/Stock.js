import React from "react";
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist/plotly-basic";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);

class Stock extends React.Component {
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
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockName}&outputsize=compact&apikey=${API_KEY}`;
    let xAxisFunction = [];
    let yAxisFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            xAxisFunction.push(key);
            yAxisFunction.push(data['Time Series (Daily)'][key]['1. open']);
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
        <h4>{this.state.stockName} Daily Series</h4>
        <Plot
          data={[
            {
              x: this.state.xAxis,
              y: this.state.yAxis,
              marker: {color: 'green'},
              type: 'scatter',
              mode: 'lines+markers',
            }
          ]}
          layout={{height: 300,width: 420}}
        />
      </div>
    )
  }
}

export default Stock;