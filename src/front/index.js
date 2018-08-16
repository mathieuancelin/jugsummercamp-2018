import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import * as Service from './services';
import './styles.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import MyTvShows from './pages/MyTvshows';
import TvShow from './pages/TvShow';
import Login from './pages/Login';

Array.prototype.flatMap = function (lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

class PrivateRoute extends React.Component {

  state = {
    loaded: false,
    user: null
  };

  componentDidMount() {
    Service.me().then(this.onUserChange);
    Service.onUserChange(this.onUserChange);
  }

  componentWillUnmount() {
    Service.unregister(this.onUserChange);
  }

  onUserChange = user => {
    this.setState({
      loaded: true,
      user
    })
  };

  render() {
    if (this.state.loaded) {
      const { component: Component, ...rest } = this.props;
      return (
        <Route {...rest}  render={props => {
          return (
            this.state.user ? (
              <Component user={this.state.user} {...props} rootPath={this.props.rootPath}/>
            ) : (
              <Redirect to={{
                pathname: '/login',
                state: { from: this.props.location }
              }}/>
            )
          )
        }}/>
      );
    } else {
      return <div/>
    }

  }
}


const withprops = (Component, props, props2) => {
  return <Component {...props} {...props2} />
}

const MainApp = props => (

    <Switch>
      <Route exact path="/" component={p => withprops(MyTvShows, props, p)} />
      <Route path="/tvshow/:id" component={p => withprops(TvShow, props, p)} />
    </Switch>

);

const SeriesApp = props => (
  <Router basename="/">
      <Switch>
        <Route path="/login" component={Login} rootPath={props.rootPath}/>
        <PrivateRoute path="/" component={MainApp} rootPath={props.rootPath}/>
      </Switch>
  </Router>
);

window._basePath = window.__rootPath || "/";

export function init(node, rootPath) {
  ReactDOM.render(<SeriesApp rootPath={rootPath || '/assets/'}/>, node);
}