import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import R095_reactThrottle from './R095_reactThrottle';
import floatingPopulationList from './Floating_population/floatingPopulationList';
import rechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart';
import floatingPopulationListChart from './Floating_population/floatingPopulationListChart';
import floatingPopulationAreaChart from './Floating_population/floatingPopulationAreaChart';
import floatingPopulationBarChart from './Floating_population/floatingPopulationBarChart';
import floatingPopulationComposedChart from './Floating_population/floatingPopulationComposedChart';
import floatingPopulationScatterChart from './Floating_population/floatingPopulationScatterChart';

import UserApproval from '../pages/UserApproval';
import SubCodeManage from '../pages/SubCodeManage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />

        <div className="layout">
          {/* 💡 모든 페이지 좌측에 표시되는 Throttle */}
          <div className="throttle-sidebar">
            <R095_reactThrottle />
          </div>

          {/* 🔁 라우팅되는 메인 콘텐츠 */}
          <div className="main-content">
            <Route exact path='/' component={LoginForm} />
            <Route exact path='/Throttle' component={R095_reactThrottle} />
            <Route exact path='/UserApproval' component={UserApproval} />
            <Route exact path='/SubCodeManage' component={SubCodeManage} />
            <Route path='/floatPopulationList' component={floatingPopulationList} />
            <Route path='/rechartsSimpleLineChart' component={rechartsSimpleLineChart} />
            <Route path='/floatingPopulationListChart' component={floatingPopulationListChart} />
            <Route path='/floatingPopulationAreaChart' component={floatingPopulationAreaChart} />
            <Route path='/floatingPopulationBarChart' component={floatingPopulationBarChart} />
            <Route path='/floatingPopulationComposedChart' component={floatingPopulationComposedChart} />
            <Route path='/floatingPopulationScatterChart' component={floatingPopulationScatterChart} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);