import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from "axios";

class floatingPopulationAreaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount = async () => {
        // axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&'+
        // 'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=5', {
        // })
        // .then( response => {
        //     try {
        //         this.setState({ responseFPList: response });
        //         this.setState({ append_FPList: this.state.responseFPList.data.entry });
        //     } catch (error) {
        //         alert(error)
        //     }
        // })
        // .catch( error => {alert(error);return false;} );
    }

    render () {
        return (
            <AreaChart
              width={1000}
              height={300}
              data={this.state.append_FPList}
              margin={{
                top: 5, right: 50, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="군구" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="유동인구수" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          );
    }
}

export default floatingPopulationAreaChart;