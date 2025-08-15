FROM node:22-alpine
# FROM registry.cn-chengdu.aliyuncs.com/xijia2/node:22-alpine
WORKDIR /app
ENTRYPOINT node server/index.mjs