FROM node:alpine
WORKDIR '/app'

COPY package.json .
COPY ./build .
RUN npm install

CMD ["npm","start"]