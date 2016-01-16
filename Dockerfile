FROM node:5.3.0

RUN mkdir -p /home/app
WORKDIR /usr/src/app

RUN npm install -g gulp
RUN npm install -g babel

COPY ./package.json /home/app/package.json
RUN npm install

COPY . /home/app

# Set development environment as default
ENV NODE_ENV development

EXPOSE 3000 5858

CMD npm start
