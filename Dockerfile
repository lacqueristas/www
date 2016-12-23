FROM node:7.1.0-alpine

ENV APPLICATION /usr/src/www
ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 3001

EXPOSE $PORT
WORKDIR $APPLICATION

RUN apk add --no-cache tzdata

COPY package.json $APPLICATION/

RUN npm install

CMD npm start
