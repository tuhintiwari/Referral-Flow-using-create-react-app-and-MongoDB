// houses react-router stuff

import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';      // BrowserRouter tells the browser how to behave(brain)
                                                              // Route - Rule between server and set of components
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);         // export the component, once we pass actions they are assigned to App components as props
