import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="shadowed">
        <div className="container">
          <div className="col-xs-12">
            <div className="text-center">
              <p className="lead">Jug SummerCamp</p>
              <p>
                <a className="btn btn-link" href="/">
                  Accueil
                </a>
                <a className="btn btn-link" href="/planning">
                  Planning
                </a>
                <a className="btn btn-link" href="/presentations">
                  Présentations
                </a>
                <a className="btn btn-link" href="/speakers">
                  Speakers
                </a>
                <a className="btn btn-link" href="/sponsors">
                  Partenaires
                </a>
                <a className="btn btn-link" href="/access">
                  Accès
                </a>
                <a className="btn btn-link" href="/login">
                  <i className="fa fa-lock" />
                </a>
              </p>
              <p />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
