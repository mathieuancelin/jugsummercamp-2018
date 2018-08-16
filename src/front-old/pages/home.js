import React, { Component } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Cell } from '../components/cell';

import _ from 'lodash';

export class Home extends Component {
  state = {
    talks: [],
  };

  componentDidMount() {
    fetch('/api/talks')
      .then(r => r.json())
      .then(talks => {
        this.setState({ talks: _.orderBy(talks, t => t['start-date']) });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <h1> JUG SummerCamp Édition 2018</h1>

            <div className="row">
              <div className="col-sm-4">
                <p />
                <h3> Le Jug Summer Camp est complet ! </h3>
                <p>
                  {' '}
                  <br />
                  Pour sa 9e édition le vendredi 14 septembre, le Jug Summer Camp affiche déjà
                  complet. Si vous souhaitez être inscrit sur liste d'attente, envoyez un mail à
                  team@poitoucharentesjug.org. N'hésitez pas à vous tenir informé de l'actu de la
                  conférence sur notre compte twitter :
                  <span>
                    <a href="https://twitter.com/jugsummercamp" data-show-count="false">
                      @jugsummercamp
                    </a>
                    .
                  </span>
                  <br />
                </p>
                <p>
                  Pour toute question, contactez-nous : <b>team@poitoucharentesjug.org</b>
                </p>
                <h3> Les vidéos de l'édition 2017 sur notre chaîne Youtube !</h3>
                <p>
                  En attendant de vivre l'édition 2018, retrouvez toutes les{' '}
                  <b>
                    {' '}
                    vidéos du Jug Summer Camp 2017 sur la chaîne YouTube du Poitou-Charentes JUG !{' '}
                  </b>{' '}
                </p>
              </div>
              {this.state.talks.length > 0 && (
                <div className="col-sm-8">
                  <div className="panel panel-default">
                    <div className="panel-heading">Les thèmes retenus&nbsp;:</div>
                    <ul className="list-group">
                      {this.state.talks.map(talk => (
                        <Cell talk={talk} />
                      ))}
                    </ul>
                  </div>
                  <div>
                    <a className="btn btn-primary pull-right" href="/planning">
                      <i className="fa fa-calendar" /> Consulter le planning
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="container">
            <section id="advertising">
              <div className="col-12">
                <div className="text-center">
                  <div className="lead"> Ils soutiennent le Jug SummerCamp</div>

                  <a href="http://www.serli.com/">
                    <img
                      className="img-advertising"
                      src="http://serli-fr.s3.amazonaws.com/JugSummerCamp/logo-serli-bl-fdtransparent.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="http://github.com">
                    <img
                      className="img-advertising"
                      src="http://serli-fr.s3.amazonaws.com/JugSummerCamp/GitHub_Logo_300px.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="https://www.clever-cloud.com/">
                    <img
                      className="img-advertising"
                      src="https://serli-fr.s3.amazonaws.com/JugSummerCamp/clevercloud.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="https://www.elastic.co/">
                    <img
                      className="img-advertising"
                      src="https://lh3.googleusercontent.com/-GCDz_7Cok3g/Vw-WxUFol-I/AAAAAAAAAkU/VwkFq7WQLOofRQcwMyVR1GF5FxCEVvHkwCCo/s300-Ic42/elastic-logo300px.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="http://www.sonarsource.com">
                    <img
                      className="img-advertising"
                      src="http://serli-fr.s3.amazonaws.com/JugSummerCamp/sonarsource-logo.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="https://www.saagie.com/fr">
                    <img
                      className="img-advertising"
                      src="https://serli-fr.s3.amazonaws.com/JugSummerCamp/saagie-logo-red-200.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
