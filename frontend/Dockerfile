FROM node:18.18.0

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP

COPY package.json yarn.lock $APP/
RUN yarn

COPY . $APP/

CMD ["yarn", "dev"]
