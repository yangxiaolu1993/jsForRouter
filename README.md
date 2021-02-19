## 原生 JS 实现路由

采用原生 JS 分别实现 hash 模式路由与 history 路由

### 运行方式

需要使用 nginx 搭建了运行环境

启动： nginx 

nginx 配置

server {
    listen       8080;
    server_name  localhost;


    location / {
        root   /项目在本机的路径/;
        index  index.html;
    }

}

### 文件说明

《SPA 路由三部曲之核心原理》 

    HTML 文件为：cart.html  classify.html  home.html

《SPA 路由三部曲之实战篇》

    HTML 文件为：index.html

