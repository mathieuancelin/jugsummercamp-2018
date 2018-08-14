import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <img
          src="http://www.jugsummercamp.org/assets/images/header-placeholder.png"
          id="placeholder"
          className="img-responsive"
        />
        <nav className="navbar navbar-default rotated shadowed" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#top-menu">
                <span className="sr-only">Menu</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <a href="" id="logo">
              <img src="http://www.jugsummercamp.org/assets/images/logo-summercamp.png" className="img-responsive" />
            </a>
            <div className="collapse navbar-collapse" id="top-menu">
              <ul className="nav navbar-nav" role="menu">
                <li className="">
                  <a href="/planning">
                    <i className="fa fa-calendar" /> Planning
                  </a>
                </li>
                <li className="">
                  <a href="/presentations">
                    <i className="fa fa-comment" /> Présentations
                  </a>
                </li>
                <li className="">
                  <a href="/speakers">
                    <i className="fa fa-user" /> Speakers
                  </a>
                </li>
                <li className="">
                  <a href="/sponsors">
                    <i className="fa fa-star" /> Partenaires
                  </a>
                </li>
                <li className="">
                  <a href="/access">
                    <i className="fa fa-map-marker" /> Accès
                  </a>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Édition 2018
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
