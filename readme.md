# JUG Summer Camp 2018

## Hosts

```
127.0.0.1   www.jsc.fr api.jsc.fr blog.jsc.fr status.jsc.fr kibana.jsc.fr elastic.jsc.fr keycloak.jsc.fr otoroshi.jsc.fr otoroshi-api.jsc.fr privateapps.jsc.fr ingester.jsc.fr
```

## Run

```sh
rm -rf RUNNING_PID
docker-compose build
docker-compose up
yarn install
yarn build-front-dev
yarn start
java -Dapp.privateapps.port=8080 -Dapp.domain=jsc.fr -Dapp.importFrom=./config/otoroshi.json -jar $OTO_BIN/otoroshi.jar
```

## Links

* http://keycloak.jsc.fr:8889
* http://elastic.jsc.fr:8889
* http://kibana.jsc.fr:8889
* http://ingester.jsc.fr:8889
* http://www.jsc.fr:8080
* http://api.jsc.fr:8080 
* http://blog.jsc.fr:8080 
* http://status.jsc.fr:8080
* http://otoroshi.jsc.fr:8080
* http://otoroshi-api.jsc.fr:8080
* http://privateapps.jsc.fr:8080
* http://127.0.0.1:9000
