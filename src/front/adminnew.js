import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const gaugeOptions = {
  chart: {
    type: 'solidgauge',
    height: 170,
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '140%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc',
    },
  },

  tooltip: {
    enabled: false,
  },

  // the value axis
  yAxis: {
    stops: [
      [0.1, '#55BF3B'], // green
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#DF5353'], // red
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70,
    },
    labels: {
      y: 16,
    },
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};

class AdminNew extends Component {


  state = {
    me: null
  };

  componentDidMount() {
    this.setup();
    fetch('/admin/me').then(r => {
      if (r.status === 200) {
        r.json().then(me => this.setState({ me }));
      } else {
        return fetch('/me').then(r => {
          if (r.status === 200) {
            r.json().then(me => this.setState({ me }));
          } 
        });
      }
    });
  }
  update = chart => {
    // Speed
    var point, newVal, inc;

    if (chart) {
      point = chart.series[0].points[0];
      inc = Math.round((Math.random() - 0.5) * 100);
      newVal = point.y + inc;

      if (newVal < 0 || newVal > 200) {
        newVal = point.y - inc;
      }

      point.update(newVal);
    }
    setTimeout(() => this.update(chart), 2000);
  };

  setupOne = ref => {
    return Highcharts.chart(
      ref,
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 200,
          title: {
            text: '',
            enabled: false,
          },
        },

        credits: {
          enabled: false,
        },

        exporting: {
          enabled: false,
        },

        series: [
          {
            name: 'speed',
            data: [80],
            dataLabels: {
              format:
                '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') +
                '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">stuff</span></div>',
            },
            tooltip: {
              valueSuffix: 'stuff',
            },
          },
        ],
      })
    );
  };

  setup = () => {
    this.update(this.setupOne(this.chart1Ref));
    this.update(this.setupOne(this.chart2Ref));
    this.update(this.setupOne(this.chart3Ref));
    this.update(this.setupOne(this.chart4Ref));
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
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
              <a className="navbar-brand" href="#">
                My TVShows - Admin
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                {!this.state.me && <a href="#">Dashboard</a>}
                {this.state.me && <a href="#">{this.state.me.name}</a>}
                </li>
              </ul>
              <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Search..." />
              </form>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <li className="active">
                  <a href="#">
                    Overview <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
                <li>
                  <a href="#">Export</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Dashboard</h1>

              <div className="row placeholders">
                <div ref={r => (this.chart1Ref = r)} className="col-xs-6 col-sm-3 placeholder" />
                <div ref={r => (this.chart2Ref = r)} className="col-xs-6 col-sm-3 placeholder" />
                <div ref={r => (this.chart3Ref = r)} className="col-xs-6 col-sm-3 placeholder" />
                <div ref={r => (this.chart4Ref = r)} className="col-xs-6 col-sm-3 placeholder" />
              </div>

              <h2 className="sub-header">Top actions</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>Lorem</td>
                      <td>ipsum</td>
                      <td>dolor</td>
                      <td>sit</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>amet</td>
                      <td>consectetur</td>
                      <td>adipiscing</td>
                      <td>elit</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Integer</td>
                      <td>nec</td>
                      <td>odio</td>
                      <td>Praesent</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>libero</td>
                      <td>Sed</td>
                      <td>cursus</td>
                      <td>ante</td>
                    </tr>
                    <tr>
                      <td>1,004</td>
                      <td>dapibus</td>
                      <td>diam</td>
                      <td>Sed</td>
                      <td>nisi</td>
                    </tr>
                    <tr>
                      <td>1,005</td>
                      <td>Nulla</td>
                      <td>quis</td>
                      <td>sem</td>
                      <td>at</td>
                    </tr>
                    <tr>
                      <td>1,006</td>
                      <td>nibh</td>
                      <td>elementum</td>
                      <td>imperdiet</td>
                      <td>Duis</td>
                    </tr>
                    <tr>
                      <td>1,007</td>
                      <td>sagittis</td>
                      <td>ipsum</td>
                      <td>Praesent</td>
                      <td>mauris</td>
                    </tr>
                    <tr>
                      <td>1,008</td>
                      <td>Fusce</td>
                      <td>nec</td>
                      <td>tellus</td>
                      <td>sed</td>
                    </tr>
                    <tr>
                      <td>1,009</td>
                      <td>augue</td>
                      <td>semper</td>
                      <td>porta</td>
                      <td>Mauris</td>
                    </tr>
                    <tr>
                      <td>1,010</td>
                      <td>massa</td>
                      <td>Vestibulum</td>
                      <td>lacinia</td>
                      <td>arcu</td>
                    </tr>
                    <tr>
                      <td>1,011</td>
                      <td>eget</td>
                      <td>nulla</td>
                      <td>Class</td>
                      <td>aptent</td>
                    </tr>
                    <tr>
                      <td>1,012</td>
                      <td>taciti</td>
                      <td>sociosqu</td>
                      <td>ad</td>
                      <td>litora</td>
                    </tr>
                    <tr>
                      <td>1,013</td>
                      <td>torquent</td>
                      <td>per</td>
                      <td>conubia</td>
                      <td>nostra</td>
                    </tr>
                    <tr>
                      <td>1,014</td>
                      <td>per</td>
                      <td>inceptos</td>
                      <td>himenaeos</td>
                      <td>Curabitur</td>
                    </tr>
                    <tr>
                      <td>1,015</td>
                      <td>sodales</td>
                      <td>ligula</td>
                      <td>in</td>
                      <td>libero</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function init(node) {
  ReactDOM.render(<AdminNew />, node);
}
