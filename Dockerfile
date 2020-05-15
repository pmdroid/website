FROM node:13-alpine

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /usr/src/app
RUN chown node:node /usr/src/app
USER node

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
COPY ./ /usr/src/app

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
