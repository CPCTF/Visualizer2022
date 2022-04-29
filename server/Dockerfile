FROM node:16-alpine AS build

WORKDIR /app/client

COPY . /app/client/

WORKDIR /app/client/server

RUN apk update && apk add git

RUN npm ci
RUN npm run build

FROM node:16-alpine 

COPY --from=build /app/client/server /server
