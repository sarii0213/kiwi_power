# MySQLの公式イメージを使用
FROM mysql:8.0.29

# 環境変数の設定
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=project_production
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# 初回起動時の初期化用SQLスクリプトを追加
COPY ./init.sql /docker-entrypoint-initdb.d/

# データベースが初回起動時に初期化されることを確認
RUN ["mysqld", "--initialize"]
