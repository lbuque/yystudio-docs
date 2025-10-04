#!/bin/bash

# HTTPS 开发服务器启动脚本

echo "🔧 正在检查 HTTPS 证书..."

# 检查证书是否存在
if [ ! -f ".ssl/localhost-key.pem" ] || [ ! -f ".ssl/localhost.pem" ]; then
    echo "❌ SSL 证书不存在，正在生成..."
    
    # 检查 mkcert 是否安装
    if ! command -v mkcert &> /dev/null; then
        echo "🍺 正在安装 mkcert..."
        brew install mkcert
        echo "🔐 正在设置本地 CA..."
        mkcert -install
    fi
    
    # 创建证书目录
    mkdir -p .ssl
    
    # 生成证书
    echo "📜 正在生成本地 SSL 证书..."
    mkcert -key-file .ssl/localhost-key.pem -cert-file .ssl/localhost.pem localhost 127.0.0.1
    
    echo "✅ SSL 证书生成完成！"
else
    echo "✅ SSL 证书已存在"
fi

echo ""
echo "🚀 正在启动 HTTPS 开发服务器..."
echo "📱 Web Serial API 需要 HTTPS 环境才能正常工作"
echo "🌐 访问地址: https://localhost:5173"
echo ""

# 启动开发服务器
pnpm run docs:dev