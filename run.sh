docker build -t stub-app .

docker run \
  -v "$(pwd)":/usr/app/files \
  -p:3000:3000 rgparkins/rest-stub:latest