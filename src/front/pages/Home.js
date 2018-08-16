import React, { Component } from 'react';
import { TopBar } from './Layout';
import * as Service from '../services';

export class Home extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    Service.me().then(user => this.setState({ user }));
  }

  render() {
    return (
      <div className="container">
        <TopBar user={this.state.user} />
        <div className="row">
          <img src={`/assets/img/logo.png`} className="img-responsive center-block logo" />
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="jumbotron">
              <h2>Hello</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
