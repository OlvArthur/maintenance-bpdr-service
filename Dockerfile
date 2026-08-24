# api-gateway/Dockerfile
FROM node:22-bullseye-slim

WORKDIR /usr/src/app

COPY .yarn ./.yarn
COPY .yarnrc.yml package.json yarn.lock ./
RUN yarn install --immutable

COPY . .

RUN yarn prisma generate

EXPOSE 5001

CMD ["yarn", "dev"]