@echo off
REM Input routine for batch using VBScript to provide input box
REM Stephen Knight, October 2009, http://www.dragon-it.co.uk/

call :inputbox "Select Tutorial Index:(0-17)" "Angular Tutorial"
echo You entered %Input%

cmd /c ng server --app=%input% 
start http://localhost:4200

exit /b

:InputBox
set input=
set heading=%~2
set message=%~1
echo wscript.echo inputbox(WScript.Arguments(0),WScript.Arguments(1)) >"%temp%\input.vbs"
for /f "tokens=* delims=" %%a in ('cscript //nologo "%temp%\input.vbs" "%message%" "%heading%"') do set input=%%a
exit /b