FROM heroku/heroku:16-build

ENV APPLICATION /app
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
ENV PORT 3000

WORKDIR $APPLICATION

COPY package.json $APPLICATION/
COPY source/ $APPLICATION/source
COPY .babelrc $APPLICATION/
COPY gulpfile.js $APPLICATION/

RUN wget -q -O /heroku-buildpack-nodejs-master.zip https://github.com/heroku/heroku-buildpack-nodejs/archive/master.zip
RUN unzip -q /heroku-buildpack-nodejs-master.zip -d /
RUN /heroku-buildpack-nodejs-master/bin/detect $APPLICATION && /heroku-buildpack-nodejs-master/bin/compile $APPLICATION/ /tmp

RUN npm run build

EXPOSE $PORT

CMD ["npm", "run", "start"]
