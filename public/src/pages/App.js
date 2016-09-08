import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import { Link } from 'react-router';
// import LeftPanel from '../containers/PanelContainer';

export default class App extends Component {
  render() {
    return (
    	<AppContainer>
          <div className="row row1">
            <div className="col-md-3 left-panel">
              <h1 className="left-panel-title">ADMIN DASHBOARD</h1>
              <nav>
                <ul className="nav">
                  <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                    <span>Navigation</span>
                  </li>

                  <li ui-sref-active="active">
                    <Link role="presentation" to="/profile">
                      <i className="glyphicon glyphicon-map-marker icon text-info-dker"></i>
                      <span className="font-bold">Profile</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-9 right-board">
    	      {this.props.children}
            </div>
          </div>
    	</AppContainer>
    );
  }
}