# JUG Summer Camp 2018

## Hosts

```
127.0.0.1   www.jsc.fr api.jsc.fr admin.jsc.fr kibana.jsc.fr elastic.jsc.fr keycloak.jsc.fr otoroshi.jsc.fr otoroshi-api.jsc.fr privateapps.jsc.fr ingester.jsc.fr
```

## Run

```sh
rm -rf RUNNING_PID
docker-compose build
docker-compose up
yarn install
yarn build-front-dev
yarn start
java -Dapp.privateapps.port=8080 -Dapp.domain=jsc.fr -Dapp.importFrom=./config/otoroshi.json -Dapp.webhooks.size=20 -jar $OTO_BIN/otoroshi.jar
```

## Links

* http://keycloak.jsc.fr:8889
* http://elastic.jsc.fr:8889
* http://kibana.jsc.fr:8889
* http://ingester.jsc.fr:8889
* http://www.jsc.fr:8080
* http://api.jsc.fr:8080 
* http://admon.jsc.fr:8080 
* http://otoroshi.jsc.fr:8080
* http://otoroshi-api.jsc.fr:8080
* http://privateapps.jsc.fr:8080
* http://127.0.0.1:9000

## Scenario

* start the classic app
* start otoroshi
* show the app
  * otoroshify the app `www.jsc.fr`
* configure elastic
  * indroduce some traffic with wrk (wrk2  -t4 -c20 -d500s -R 30 --latency http://www.jsc.fr:8080)
  * show otoroshi metrics
  * show otoroshi global metrics
  * show kibana metrics
    * http://kibana.jsc.fr:8889/app/kibana#/dashboard/75999180-a1f8-11e8-9b2a-4be8eafc82e8?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fd,interval:'1m',mode:quick,timezone:Europe%2FBerlin,to:now%2Fd))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:13,i:'1',w:11,x:0,y:0),id:'40fbc2d0-a1f9-11e8-9b2a-4be8eafc82e8',panelIndex:'1',type:visualization,version:'6.3.0'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:13,i:'2',w:11,x:11,y:0),id:'941ac0b0-a1f9-11e8-9b2a-4be8eafc82e8',panelIndex:'2',type:visualization,version:'6.3.0'),(embeddableConfig:(),gridData:(h:13,i:'3',w:13,x:35,y:0),id:d7daf5e0-a1f9-11e8-9b2a-4be8eafc82e8,panelIndex:'3',type:visualization,version:'6.3.0'),(embeddableConfig:(),gridData:(h:8,i:'4',w:48,x:0,y:22),id:'13de93d0-a1fa-11e8-9b2a-4be8eafc82e8',panelIndex:'4',type:visualization,version:'6.3.0'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:9,i:'5',w:48,x:0,y:13),id:'6e64dd00-a1fa-11e8-9b2a-4be8eafc82e8',panelIndex:'5',type:visualization,version:'6.3.0'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:8,i:'6',w:48,x:0,y:30),id:d963c350-a1fa-11e8-9b2a-4be8eafc82e8,panelIndex:'6',type:visualization,version:'6.3.0'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:9,i:'7',w:48,x:0,y:38),id:'497ea560-a1fb-11e8-9b2a-4be8eafc82e8',panelIndex:'7',type:visualization,version:'6.3.0'),(embeddableConfig:(),gridData:(h:13,i:'8',w:13,x:22,y:0),id:afa32cd0-a1fb-11e8-9b2a-4be8eafc82e8,panelIndex:'8',type:visualization,version:'6.3.0')),query:(language:lucene,query:'%2B@type:+%22GatewayEvent%22'),timeRestore:!f,title:Otoroshi,viewMode:view)
* show the user dashboard with jwt token
  * otoroshify dashboard `www.jsc.fr:8080/dashboard`
  * add jwt token verification
    * rename email then change it
* show the search api
  * otoroshify the api on `api.jsc.fr` and `www.jsc.fr:8080/api/shows` (use additional headers with a valid JWT token from jwt.io)
  * add cors on the api
  * issue an apikey
  * test with curl
    * curl http://api.jsc.fr:8080/shows/_search\?name\=bre -u --include
  * show metrics and quotas (via ui, and kibana)
* show the admin ui
  * start keycloak
    * create realm
    * create user
  * configure otoroshi auth 
  * otoroshify admin and add auth 
  * --- expose admin on `admin.jsc.fr` other domain and use snow monkey to create a redirect ???
  * show that your name appears at top right
* show snowmonkey and try it on the api
  * add retries js side
* swap api with tvdb implementation 
  * introduce fake network errors with node to show circuit breaker ?
* swap admin ui with new implementation
* swap home with new theme
* stop old app, everything should work
* and we're done !!!!

## Todo

* fix parser config (oto)
* fix _histogram in ingester :(


