FROM node:14

WORKDIR /usr/app

COPY . /usr/app
COPY bin /usr/app/bin

RUN npm install

CMD ["npm", "start"]