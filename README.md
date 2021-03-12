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

| path | mime | directory |
|---|---|---|
| `/test` | `application/json` | `./application/json/test.json` |
| `/test` | `text/xml` | `./text/json/test.xml` |
| `/test` | `text/html` | `./text/html/test.xml` |
| `/user/3453312` | `application/json` | `./application/json/user/3453312.json` |

if you mount in 'application/json/test.json'