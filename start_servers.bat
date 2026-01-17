@echo off
:: Switch to the project drive and directory explicitly
:: path fixed to use current directory
cd /d "%~dp0"

echo Starting servers in %CD%...

:: Start Python Backend
start "Nagrik Backend (Python)" cmd /k "python api/py.py"

:: Start Next.js Frontend
start "Nagrik Frontend (Next.js)" cmd /k "npm run dev"

echo Done. Check the new windows for status.
