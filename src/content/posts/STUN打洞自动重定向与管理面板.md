---
title: STUN打洞自动重定向与管理面板
published: 2026-04-16
description: ""
image: ./imgs/2.png
tags:
  - 博客
  - 技术
  - 网站
  - 开源
category: ""
draft: false
lang: ""
---


::github{repo="i5114514kf/STUN-Panel"}
## 特色功能

- **自动化状态上报**：通过 Lucky 的 Webhook 功能，当内网穿透的公网 IP 或端口发生变化时，Worker 会即时接收并更新数据，无需人工维护 IP。
- **智能重定向 (Short URL)**：支持 `域名/服务名` 的直接跳转模式。
- **一键主题切换**：支持深色模式与浅色模式切换。
- **实时网络健康监测**：前端即时测速，可视化分级提醒。
- **零成本维护**：利用 Cloudflare 的免费额度（KV + Workers）。
- **PC/移动端排版优化**：自适应节点列表

## 使用教程

本教程仅适用于已搭建好端口穿透的用户。关于如何实现端口穿透，请参考其他教程，例如：  
[STUN内网穿透 | Lucky开发分享](https://www.lucky666.cn/docs/modules/stun/)

> 在部署或使用过程中遇到任何问题，都可以向 AI 求助。求助时，请附带完整的日志或对问题的详细描述。

### 第一步：部署 Cloudflare Worker

点击一键部署按钮：  
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/i5114514kf/STUN-Panel)
[备用一键部署按钮](https://deploy.workers.cloudflare.com/?url=https://github.com/i5114514kf/STUN-Panel)

操作步骤：  
1. 选择 KV 命名空间，点击 **新建**。  
2. 点击 **创建和部署**。

### 第二步：绑定自定义域名

由于 `workers.dev` 域名被墙，建议绑定自定义域名并进行 IP 优选。  
具体可参考二叉树树的教程：  
[试试 Cloudflare IP 优选！让 Cloudflare 在国内再也不是减速器！ - 《二叉树树》官方网站](https://2x.nz/posts/cf-fastip/)

### 第三步：配置 Lucky Webhook 上报

现在需要让 Lucky 客户端将节点信息推送到导航页。

1. 进入 Lucky 后台 → **内网穿透** → **STUN内网穿透** → **设置**。  
2. 启用 **全局 Stun Webhook**，并填写以下配置：

   - **接口地址**：  
     `https://你的域名/?key=123456&name=#{ruleName}&addr=#{ip}:#{port}`
   - **请求方法**：`GET`
   - **请求头**：留空
   - **重试次数**：可适当增加
   - **接口调用成功包含的字符串**：`Update Success`

> **注意**：`key` 必须与代码中第 8 行的校验码一致（默认为 `123456`），可根据需要自行修改。

### 第四步：使用

- **访问导航页**：直接访问 `https://你的域名/` 即可看到所有上报的节点。  
- **快捷跳转**：访问 `https://你的域名/节点名称` 会直接重定向到该节点的实时 IP 地址。