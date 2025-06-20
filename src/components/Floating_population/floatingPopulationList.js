import React, { Component } from 'react';
import axios from "axios";

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.setState({
            responseFPList: {
                data: {
                    entry: [
                        { 일자: "2025-06-17", 시간: "14:00", 연령대: "20대", 성별: "남성", 시: "서울", 군구: "강남구", 유동인구수: 1200 },
                        { 일자: "2025-06-17", 시간: "15:00", 연령대: "30대", 성별: "여성", 시: "서울", 군구: "서초구", 유동인구수: 850 },
                        { 일자: "2025-06-17", 시간: "16:00", 연령대: "40대", 성별: "남성", 시: "서울", 군구: "종로구", 유동인구수: 600 },
                    ]
                }
            }
        }, () => {
            this.setState({ append_FPList: this.FloatPopulListAppend() });
        });
    }

    FloatPopulListAppend = () => {

        console.log("######## append_FPList : "+ this.state.append_FPList);

        let jsonString1 = "데이터(1시간단위), 통계(1시간단위), 분석(1시간단위)";
        let newString = jsonString1.replace(/\(1시간단위\)/g, '');
        console.log(newString); 
        // 결과: "데이터, 통계, 분석"


        let result = []
        var FPList = this.state.responseFPList.data


        var jsonString = JSON.stringify(FPList)
        jsonString = jsonString.replace(/\(1시간단위\)/g, '')
        jsonString = jsonString.replace(/\(10세단위\)/g, '')
        var json = JSON.parse(jsonString)

        for(let i=0; i<json.entry.length; i++){
            var data = json.entry[i];
            var idx = i+1;
            result.push(
                <tr className="hidden_type">
                    <td>{idx}</td>
                    <td>{data.일자}</td>
                    <td>{data.시간}</td>
                    <td>{data.연령대}</td>
                    <td>{data.성별}</td>
                    <td>{data.시}</td>
                    <td>{data.군구}</td>
                    <td>{data.유동인구수}</td>
                </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section className="sub_wrap" >
                <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div className="li_top">
                        <h2 className="s_tit1">서울시 유동인구 데이터10 - 19년 11월</h2>
                    </div>
                    <div className="list_cont list_cont_admin">
                        <table className="table_ty1 fp_tlist">
                            <tr>
                                <th>Row</th>
                                <th>일자</th>
                                <th>시간</th>
                                <th>연령대</th>
                                <th>성별</th>
                                <th>시</th>
                                <th>군구</th>
                                <th>유동인구수10</th>
                            </tr>
                        </table>	
                        <table className="table_ty2 fp_tlist">
                            {this.state.append_FPList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default floatingPopulationList;