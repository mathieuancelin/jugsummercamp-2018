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
* show the user dashboard with jwt token
  * otoroshify dashboard `www.jsc.fr:8080/dashboard`
  * add jwt token verification
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

* kibana dashboard
* fix parser config (oto)


