FROM node:13.8.0-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install --frozen-lockfile
COPY . /app

CMD [ "node", "index.js" ]
