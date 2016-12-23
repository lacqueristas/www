FROM node:7.1.0-alpine

ENV APPLICATION /usr/src/www
ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 3001

EXPOSE $PORT
WORKDIR $APPLICATION
COPY package.json $APPLICATION/

RUN apk add --no-cache build-base autoconf automake nasm libjpeg-turbo-utils tzdata zlib-dev
RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/community optipng gifsicle
RUN npm install

CMD npm start
