FROM node:15.5.1

WORKDIR /mikomarketplace-backend

COPY ./mikomarketplace-backend/package*.json ./

RUN npm install

COPY . .