FROM node:alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install typescript -g

COPY . .

CMD [ "npm", "build" ]
CMD [ "npm", "start" ]