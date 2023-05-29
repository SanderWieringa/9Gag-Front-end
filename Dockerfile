FROM node:alpine
WORKDIR /usr/src/app
copy package*.json ./
RUN npm install -g npm@6
RUN npm install
copy . .
CMD ["npm", "start"]