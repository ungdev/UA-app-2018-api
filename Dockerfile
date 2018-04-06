FROM node:alpine

WORKDIR /usr/src/intranet-ua

EXPOSE 3000

CMD ["yarn", "start"]

RUN apk update && \
    apk add --no-cache git openssh openssl make gcc g++ python && \
    mkdir -p /usr/src/intranet-ua

COPY package.json /usr/src/intranet-ua/
COPY yarn.lock /usr/src/intranet-ua/

RUN yarn

COPY . /usr/src/intranet-ua/
