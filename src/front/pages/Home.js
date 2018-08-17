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
              <h2>My TVShow, manage your lovelly shows!</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac condimentum odio. Curabitur placerat orci nisi, id molestie tellus porta nec. Maecenas convallis pulvinar sem, sit amet congue nulla mollis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget sapien vitae est ornare placerat vel vitae ex. Vivamus mauris mi, tincidunt ac nisi et, aliquet pulvinar massa. In fringilla blandit justo at pulvinar. Aliquam in lorem dui. Curabitur feugiat augue et nulla faucibus, et vestibulum nibh ultricies.
              </p><p>
              Etiam interdum sed tortor nec pharetra. Nam massa augue, pellentesque nec nunc ut, euismod tincidunt libero. Nullam porta pulvinar ante, sit amet dictum risus. Mauris elementum luctus est, nec fringilla urna mattis fringilla. Mauris et rutrum lectus. Nulla facilisi. Suspendisse rutrum semper ex, vel commodo nibh tempor facilisis. In hac habitasse platea dictumst. Nunc lobortis porta semper. Morbi egestas enim et dui malesuada, ac condimentum nulla aliquet. Integer elit tellus, egestas id lacinia at, venenatis vitae tellus. Nulla sed urna euismod, vehicula mi et, vehicula lectus. Integer feugiat tellus suscipit imperdiet tristique. Maecenas vitae lectus mollis augue lacinia fringilla sed vel sapien. Phasellus at risus nulla. Suspendisse tempus, sem id molestie viverra, ex elit varius orci, et fringilla diam nisi ac ipsum.
              </p><p>
              Praesent a elit vehicula, rutrum ipsum id, iaculis odio. Morbi mattis orci ultricies erat ultrices, quis ultricies dui ornare. Nullam malesuada fringilla eros, sed laoreet ex vestibulum ut. Morbi sapien lectus, finibus ac aliquam at, consequat vel lacus. Sed efficitur sagittis vulputate. Donec placerat nibh sit amet luctus porttitor. Etiam velit dolor, varius vel lacus et, vestibulum finibus justo. Aliquam erat volutpat. Aliquam vulputate mollis scelerisque. Nulla odio eros, tincidunt nec est at, fringilla imperdiet mauris. Pellentesque molestie fringilla purus eu interdum. Praesent fringilla imperdiet pulvinar. Aliquam tristique leo et volutpat dictum. Pellentesque a tincidunt sapien. Cras pretium ut eros congue bibendum. Nulla facilisi.
              </p><p>
              Cras euismod porttitor enim vitae gravida. Maecenas rutrum nibh et arcu porttitor scelerisque. In convallis dapibus nisl, fermentum blandit augue. Nam at tristique orci. Maecenas sodales dui tortor, quis euismod quam molestie vel. In nisi mauris, sagittis quis justo non, lacinia porttitor dolor. Quisque eu sollicitudin dolor. Suspendisse feugiat at ante at luctus. Praesent fermentum suscipit magna sed porta. Praesent posuere rhoncus sem.
              </p><p>
              Sed vestibulum nulla at ex tristique commodo. Quisque ac dolor odio. Praesent lobortis quam justo, ac dapibus metus pulvinar non. Duis in nunc vel tortor dapibus placerat. Quisque dapibus dolor nec libero fermentum dapibus. Donec iaculis justo et felis scelerisque, quis luctus mi sodales. Aliquam tempor, nisi quis sollicitudin porta, dui est facilisis metus, eget sodales massa mauris a ante. Nulla consequat neque et quam malesuada, eu euismod metus volutpat. Quisque in lacus id sem auctor dictum eget a libero. Sed eget iaculis augue, quis tincidunt lectus. Praesent aliquet ex eget magna sodales ullamcorper. Suspendisse a urna lectus. Sed et tincidunt risus. In euismod tellus ligula, vitae feugiat orci aliquet non. Aenean a leo blandit, blandit eros at, consectetur lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
