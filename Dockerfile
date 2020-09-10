FROM node:alpine

WORKDIR /apps

COPY package.json .
RUN npm i

COPY ./ ./

CMD ["npm", "run", "start"]	