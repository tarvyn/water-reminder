FROM node:10

WORKDIR /usr/src/app

COPY . ./

RUN npm install --production

EXPOSE 9000

CMD [ "npm", "run", "start:api:prod" ]
