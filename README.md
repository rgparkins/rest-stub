# rest-stub

Rest stub is a simple lighweight application that can run in a docker container, 
allowing users to mount in canned responses to requests at certain paths. 

In order to run within a docker container, map your host directory containg the files to render into the docker container like so:

```text
docker run \
  -v "$(pwd)":/usr/app/files \
  -p:3000:3000 rgparkins/rest-stub:latest
```

The server will return the static file you mount in, so 

| path | mime sent | directory |
|---|---|---|
| `/test` | `application/json` | `./application/json/test.json` |
| `/test` | `text/xml` | `./text/json/test.xml` |
| `/test` | `text/html` | `./text/html/test.xml` |
| `/user/3453312` | `application/json` | `./application/json/user/3453312.json` |

You can find the docker image [here](https://hub.docker.com/repository/docker/rgparkins/rest-stub)

## Environment variables

`PORT` is the configured port the app should run on. This defaulted to 3000

## Test

The system will response to a `GET` on `/health/ping`  