FROM node:alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 
RUN npm install typescript -g

COPY . .

RUN tsc

CMD [ "npm", "start" ]