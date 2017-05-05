FROM node:7.9.0-alpine

ENV APPLICATION /usr/lib/www
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
ENV PORT 3000

WORKDIR $APPLICATION

COPY package.json $APPLICATION/

COPY source/@lacqueristas/ $APPLICATION/source/@lacqueristas/

RUN npm install

COPY source/ $APPLICATION/source
COPY .babelrc $APPLICATION/
COPY gulpfile.js $APPLICATION/

RUN npm run link
RUN npm run build

CMD npm run start
EXPOSE $PORT

CMD ["npm", "run", "start"]
