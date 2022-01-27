FROM node:alpine


RUN mkdir /app

ADD . /app

WORKDIR /app

CMD npm start --bind 0.0.0.0:$PORT