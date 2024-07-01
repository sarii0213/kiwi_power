FROM ruby:3.3.2

ENV BUNDLE_VERSION 2.3.26
ENV APP /usr/src/app

RUN apt-get update && apt-get install -y netcat-openbsd vim
RUN gem install bundler --version "$BUNDLE_VERSION"

RUN mkdir $APP
WORKDIR $APP

RUN bundle config set --local path 'vendor/bundle'

COPY Gemfile* $APP/
RUN bundle install

COPY . $APP/

RUN chmod +x ./bin/server-dev

ENV PATH $APP/vendor/bundle/ruby/3.3.0/bin:$PATH

CMD ["./bin/server-dev"]
