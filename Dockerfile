FROM node:10.15.3-alpine

# カレントワーキングディレクトリとして 'app' フォルダを指定する
WORKDIR /app

# パッケージのインストール
RUN apk update && \
    npm install -g typescript@>=2.0 @vue/cli
