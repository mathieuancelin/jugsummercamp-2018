import React from 'react';
import * as Service from '../services';
import { Link } from 'react-router-dom';

export const TopBar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to={'/'} className="navbar-brand">
          <img src={`/assets/img/logo.png`} />
        </Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {props.user && (
            <li>
              <Link to={'/login'} onClick={e => Service.logout()}>
                {props.user.userId} <span className="glyphicon glyphicon-off" />
              </Link>
            </li>
          )}
          <li>
            <a href="/admin">
              <span className="glyphicon glyphicon-lock" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export const Layout = props => (
  <div className="container">
    <TopBar {...props} />
    {props.children}
  </div>
);
