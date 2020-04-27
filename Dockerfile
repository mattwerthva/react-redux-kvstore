FROM node:8-alpine
RUN mkdir -p /usr/src/app

# copy in our app files
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install

# set env for app
ENV PORT 8080
EXPOSE 8080

# Run app
CMD [ "node", "server/server.js" ]