FROM node:16
WORKDIR /urs/src/app
COPY ./package.json .
COPY yarn.lock .
RUN yarn install --only=prod
COPY ./build ./build
