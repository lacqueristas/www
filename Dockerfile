FROM node:7.9.0-alpine

ENV APPLICATION /usr/lib/www
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
ENV PORT 3000

WORKDIR $APPLICATION

COPY source/@lacqueristas/ $APPLICATION/source/@lacqueristas/

COPY package.json $APPLICATION/

RUN npm install --global npm5
RUN npm5 install

COPY source/ $APPLICATION/source
COPY .babelrc $APPLICATION/
COPY gulpfile.js $APPLICATION/

RUN npm run build

EXPOSE $PORT

CMD ["npm", "run", "start"]
