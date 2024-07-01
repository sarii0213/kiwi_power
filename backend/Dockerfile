FROM ruby:3.3.2

ENV BUNDLE_VERSION 2.3.26
ENV APP /usr/src/app

RUN apt-get update && apt-get install -y netcat-openbsd vim
RUN gem install bundler --version "$BUNDLE_VERSION"

RUN mkdir $APP
WORKDIR $APP

COPY Gemfile* $APP/
RUN bundle install

COPY . $APP/

RUN chmod +x ./bin/server-dev

CMD ["./bin/server-dev"]
