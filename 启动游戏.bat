@echo off
chcp 65001 >nul
title 星冠云国 · Three.js 方块像素风梦幻王国
cd /d "%~dp0"
echo ========================================================
echo   正在启动【星冠云国 · 方块像素风梦幻王国】...
echo   启动后请在浏览器打开: http://localhost:5195
echo ========================================================
if not exist "node_modules" (
  echo [首次运行] 正在自动安装依赖，请稍候...
  call npm install
)
start "" "http://localhost:5195"
call npm run dev
pause
