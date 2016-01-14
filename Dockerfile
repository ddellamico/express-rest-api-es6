FROM node:5.3.0

RUN mkdir -p /home/pet-finder
WORKDIR /usr/src/app

RUN npm install -g gulp
RUN npm install -g babel

COPY ./package.json /usr/src/app/package.json
RUN npm install

COPY . /home/pet-finder

# Set development environment as default
ENV NODE_ENV development

EXPOSE 3000 5858

CMD ["gulp"]
