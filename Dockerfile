FROM node:14-alpine AS build

WORKDIR /app/client

COPY . /app/client/

RUN npm install
RUN npm run build

FROM busybox:1

COPY --from=build /app/client/build .
