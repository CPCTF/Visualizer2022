FROM node:16-alpine AS build

WORKDIR /app/client
ENV BUILD_BASE_PATH="/visualizer/"
COPY . /app/client/

RUN apk update && apk add git

RUN npm ci
RUN npm run build

FROM busybox:1

COPY --from=build /app/client/build .
