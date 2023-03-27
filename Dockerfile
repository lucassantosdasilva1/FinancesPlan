FROM node:16-alpine as modules-builder
WORKDIR /usr/src/modules
COPY package.json .
RUN npm install

FROM node:16-alpine
WORKDIR /usr/src/app
RUN npm install -g npm@9.6.2
COPY --from=modules-builder /usr/src/modules .
COPY . .
RUN npx sequelize-cli db:migrate
RUN npm run build
ENTRYPOINT npm run start
