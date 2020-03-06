FROM node:10

WORKDIR /usr/src/app

COPY dist/. ./dist/
COPY docker/api/package.json ./

RUN npm install

EXPOSE 9000

CMD [ "npm", "run", "start:api:prod" ]
