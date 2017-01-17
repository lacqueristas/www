FROM node:7.1.0-alpine

ENV \
  APPLICATION=/usr/lib/www \
  NPM_CONFIG_LOGLEVEL=warn \
  NODE_ENV=production

WORKDIR $APPLICATION

RUN apk add --no-cache tzdata

COPY package.json $APPLICATION/

RUN npm install

COPY source/ $APPLICATION/source
COPY .babelrc $APPLICATION/
COPY gulpfile.js $APPLICATION/

RUN \
  npm run build \
  && \
  npm run minify

ENV \
  PORT=3001

CMD npm start
