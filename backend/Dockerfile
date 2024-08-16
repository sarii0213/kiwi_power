FROM ruby:3.3.2

ENV BUNDLE_VERSION 2.3.26
ENV APP /usr/src/app

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y netcat-openbsd vim default-mysql-client curl

# flyctlをインストール
RUN curl -L https://fly.io/install.sh | sh

# PATHにflyctlを追加
ENV PATH="/root/.fly/bin:${PATH}"

# Bundlerのインストール
RUN gem install bundler --version "$BUNDLE_VERSION"

# アプリケーションディレクトリの作成
RUN mkdir $APP
WORKDIR $APP

# Gemfileをコピーして依存関係をインストール
COPY Gemfile* $APP/
RUN bundle install

# アプリケーションのソースコードをコピー
COPY . $APP/

# スクリプトに実行権限を付与
RUN chmod +x ./bin/server-dev

# サーバーを起動
CMD ["./bin/server-dev"]
