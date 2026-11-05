@echo off
title Dazzling Crest Website
cd /d "%~dp0"
echo Starting the Dazzling Crest website...
where python >nul 2>nul
if %errorlevel%==0 (
  start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8080/home.html"
  python -m http.server 8080
  goto :eof
)
where py >nul 2>nul
if %errorlevel%==0 (
  start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8080/home.html"
  py -m http.server 8080
  goto :eof
)
start "" "%~dp0home.html"
