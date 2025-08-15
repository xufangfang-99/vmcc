export PROJECT_NAME=pc
cd /workspeace/$PROJECT_NAME

# 先停止/删除原容器/删除原镜像/构建镜像
docker stop $PROJECT_NAME
docker rm  $PROJECT_NAME
docker rmi $PROJECT_NAME:v1
docker build -t $PROJECT_NAME:v1

# 运行
docker run --name $PROJECT_NAME -p 3401:3000 \
-e TZ=Asia/Shanghai \
-v /workspace/$PROJECT_NAME:/app \
-d -it $PROJECT_NAME:v1 /bin/bash