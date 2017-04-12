@echo off

NET SESSION > null 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Setup needs admin permissions. Please run this file as admin.
    pause
    exit
)

set NODE_VER=null
set NODE_EXEC=node-v7.8.0-x86.msi
node -v > tmp.txt
set /p NODE_VER=<tmp.txt
del tmp.txt
del null
IF %NODE_VER% == null (
    echo Installing node...
    START /WAIT %NODE_EXEC% /quiet
    echo Finished setup.
) ELSE (
    echo Node is already installed. Proceeding...
)
echo %PATH%
set PATH=%PATH%;C:\Program Files (x86)\nodejs
call npm install
call node server.js
