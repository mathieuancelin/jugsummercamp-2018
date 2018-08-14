import React, { Component } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

export class Home extends Component {
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
              <div className="col-sm-8">
                <div className="panel panel-default">
                  <div className="panel-heading">Les thèmes retenus&nbsp;:</div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1200">
                          <i className="fa fa-comment" /> Développeurs, être un expert incompris ou
                          un leader d’opinions ne dépend que de nous
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1234">
                          <i className="fa fa-user" /> Freddy Mallet
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1223">
                          <i className="fa fa-comment" /> Kotlin : Le back du futur, le codelab
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1233">
                          <i className="fa fa-user" /> Adrien Pessu
                        </a>{' '}
                        &nbsp;
                        <a href="/speaker/1242">
                          <i className="fa fa-user" /> Gautier de Saint Martin Lacaze
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1202">
                          <i className="fa fa-comment" /> Monitorer vos microservices Java avec des
                          logs, des métriques, des pings et des traces
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1232">
                          <i className="fa fa-user" /> David Pilato
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1201">
                          <i className="fa fa-comment" /> Simplifiez vous les microservices avec
                          Otoroshi
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1229">
                          <i className="fa fa-user" /> Mathieu Ancelin
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1204">
                          <i className="fa fa-comment" /> L'open-source à la rescousse de mes APIS:
                          comment les sécuriser grâce à Gravitee.io et Keycloak
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1248">
                          <i className="fa fa-user" /> David Brassely
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1203">
                          <i className="fa fa-comment" /> Typage en JavaScript : TypeScript VS Flow
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1249">
                          <i className="fa fa-user" /> Benoît Giraudou
                        </a>{' '}
                        &nbsp;
                        <a href="/speaker/1250">
                          <i className="fa fa-user" /> Ludovic Gouyou
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1205">
                          <i className="fa fa-comment" /> Vanilla is the new black
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1236">
                          <i className="fa fa-user" /> Amélie Benoit
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1206">
                          <i className="fa fa-comment" /> Les "Phantom Types" pour les nuls
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1257">
                          <i className="fa fa-user" /> Jean-Baptiste Joffre
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1208">
                          <i className="fa fa-comment" /> Voyage dans le temps avec React Suspense
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1235">
                          <i className="fa fa-user" /> Romain Durand Saint Omer
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1207">
                          <i className="fa fa-comment" /> UX : Les formulaires
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1238">
                          <i className="fa fa-user" /> Bruno Sabot
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1209">
                          <i className="fa fa-comment" /> Développer son projet perso comme un pro
                          en déploiement continu
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1243">
                          <i className="fa fa-user" /> Lionnel Dupouy
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1210">
                          <i className="fa fa-comment" /> Stream processing et SQL
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1239">
                          <i className="fa fa-user" /> Bruno Bonnin
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1211">
                          <i className="fa fa-comment" /> Au pays des Gophers (à partir de 3 ans)
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1258">
                          <i className="fa fa-user" /> Nicolas Lepage
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1212">
                          <i className="fa fa-comment" /> La CNCF et son écosystème
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1237">
                          <i className="fa fa-user" /> Julien Landuré
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1214">
                          <i className="fa fa-comment" /> Suivre les avions avec un Raspberry Pi
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1246">
                          <i className="fa fa-user" /> Guillaume Membré
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1224">
                          <i className="fa fa-comment" /> Redécouvrir l’univers connu avec le
                          dataset de la NASA
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1253">
                          <i className="fa fa-user" /> Horacio Gonzalez
                        </a>{' '}
                        &nbsp;
                        <a href="/speaker/1254">
                          <i className="fa fa-user" /> Aurélien Hébert
                        </a>{' '}
                        &nbsp;
                        <a href="/speaker/1255">
                          <i className="fa fa-user" /> Emmanuel Feller
                        </a>{' '}
                        &nbsp;
                        <a href="/speaker/1256">
                          <i className="fa fa-user" /> Pierre Zemb
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1213">
                          <i className="fa fa-comment" /> Google Container Tools : développer
                          efficacement dans un monde de conteneurs
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1230">
                          <i className="fa fa-user" /> David Gageot
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1216">
                          <i className="fa fa-comment" /> Feature flipping avec Izanami
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1259">
                          <i className="fa fa-user" /> Alexandre Delègue
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1215">
                          <i className="fa fa-comment" /> Maroufle ton CSS avec Flexbox et CSS-grid
                          !
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1236">
                          <i className="fa fa-user" /> Amélie Benoit
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1218">
                          <i className="fa fa-comment" /> Hexagonal Architecture for dummies and
                          classical Spring developer
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1240">
                          <i className="fa fa-user" /> Youen Chené
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1217">
                          <i className="fa fa-comment" /> Vous vous souvenez de PlayFramework 1?
                          C'était bien 😍 ... puis plus rien 😭. Réjouissez vous, RedPipe vient de
                          naître 🎉
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1241">
                          <i className="fa fa-user" /> Philippe Charriere
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1220">
                          <i className="fa fa-comment" /> Du Legacy minitel au web
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1252">
                          <i className="fa fa-user" /> Jérôme Benois
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1219">
                          <i className="fa fa-comment" /> Les Progressive Web App - Quoi ? Où ?
                          Comment ? Pourquoi ?
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1260">
                          <i className="fa fa-user" /> Fedy Salah
                        </a>{' '}
                        &nbsp;
                        <a href="/speaker/1261">
                          <i className="fa fa-user" /> Guillaume Soldera
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1222">
                          <i className="fa fa-comment" /> Libérer la puissances des graphes avec
                          GraphQl et Neo4j
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1231">
                          <i className="fa fa-user" /> Benoît Simard
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>

                    <li className="list-group-item">
                      <h2>
                        <a href="/presentation/1221">
                          <i className="fa fa-comment" /> Découvrir par l’exemple : Microservices et
                          Event Sourcing avec Kafka et Kubernetes
                        </a>
                      </h2>
                      <small>
                        <a href="/speaker/1251">
                          <i className="fa fa-user" /> Tugdual Grall
                        </a>{' '}
                        &nbsp;
                      </small>
                    </li>
                  </ul>
                </div>
                <div>
                  <a className="btn btn-primary pull-right" href="/planning">
                    <i className="fa fa-calendar" /> Consulter le planning
                  </a>
                </div>
              </div>
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
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="http://github.com">
                    <img
                      className="img-advertising"
                      src="http://serli-fr.s3.amazonaws.com/JugSummerCamp/GitHub_Logo_300px.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="https://www.clever-cloud.com/">
                    <img
                      className="img-advertising"
                      src="https://serli-fr.s3.amazonaws.com/JugSummerCamp/clevercloud.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="https://www.elastic.co/">
                    <img
                      className="img-advertising"
                      src="https://lh3.googleusercontent.com/-GCDz_7Cok3g/Vw-WxUFol-I/AAAAAAAAAkU/VwkFq7WQLOofRQcwMyVR1GF5FxCEVvHkwCCo/s300-Ic42/elastic-logo300px.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="http://www.sonarsource.com">
                    <img
                      className="img-advertising"
                      src="http://serli-fr.s3.amazonaws.com/JugSummerCamp/sonarsource-logo.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </a>

                  <a href="https://www.saagie.com/fr">
                    <img
                      className="img-advertising"
                      src="https://serli-fr.s3.amazonaws.com/JugSummerCamp/saagie-logo-red-200.png"
                      style={{ paddingLeft: 10, paddingRight: 10 }}
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
