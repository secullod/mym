FROM node
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD yarn start
