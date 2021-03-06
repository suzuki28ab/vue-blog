FROM node:13.10.1-alpine3.10

WORKDIR /app

COPY package*.json ./

RUN apk update && npm install
