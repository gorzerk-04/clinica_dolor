# Iniciar sesión en GitHub CLI (usa ruta completa si gh no está en PATH)
$gh = "C:\Program Files\GitHub CLI\gh.exe"
if (-not (Test-Path $gh)) {
    $gh = "$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe"
}
if (-not (Test-Path $gh)) {
    Write-Host "Instala GitHub CLI: winget install GitHub.cli" -ForegroundColor Red
    exit 1
}

$env:Path = "$(Split-Path $gh -Parent);$env:Path"
& $gh auth login
