FROM node:15.5.1

WORKDIR /mikomarketplace-backend

COPY package*.json ./

RUN npm install

COPY wait-for-it.sh ./
RUN chmod 0755 *.sh

COPY . .