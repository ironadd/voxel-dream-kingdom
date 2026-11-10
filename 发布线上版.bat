@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ====================================================
echo   正在构建《星冠云国 · 方块像素风梦幻王国》静态发布包...
echo ====================================================
call npm run build
if errorlevel 1 (
  echo [错误] 构建失败，请检查代码错误！
  pause
  exit /b 1
)

type nul > "dist\.nojekyll"

pushd dist
if exist ".git" rmdir /s /q ".git"
git init -b gh-pages
git config user.name "ironadd"
git config user.email "ironadd@users.noreply.github.com"
git add .
git commit -m "deploy: update Voxel Dream Kingdom WebGL bundle"
git remote add origin https://github.com/ironadd/voxel-dream-kingdom.git
git push -f origin gh-pages
popd
if exist "dist\.git" rmdir /s /q "dist\.git"

echo ====================================================
echo   发布完成！约 30~60 秒后刷新以下地址即可体验最新版：
echo   https://ironadd.github.io/voxel-dream-kingdom/
echo ====================================================
pause
