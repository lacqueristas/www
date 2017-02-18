FROM node:7.1.0-alpine

ENV APPLICATION /usr/lib/www
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production

WORKDIR $APPLICATION

COPY package.json $APPLICATION/

RUN npm install

COPY source/ $APPLICATION/source
COPY .babelrc $APPLICATION/
COPY gulpfile.js $APPLICATION/

RUN npm run build

CMD npm run start
