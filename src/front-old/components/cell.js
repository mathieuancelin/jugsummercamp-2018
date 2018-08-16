import React, { Component } from 'react';

export class Cell extends Component {
  render() {
    return (
      <li className="list-group-item">
        <h2>
          <a href={`/presentation/${this.props.talk.id}`}>
            <i className="fa fa-comment" /> {this.props.talk.title}
          </a>
        </h2>
        <small>
          {this.props.talk.speakers.map(speaker => {
            return (
              <a href={`/speakers/${speaker.id}`} style={{ marginLeft: 5 }}>
                <i className="fa fa-user" /> {speaker.name}
              </a>
            );
          })}
        </small>
      </li>
    );
  }
}
