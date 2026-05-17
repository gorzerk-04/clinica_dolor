# Subir el proyecto a GitHub (ejecutar después de: gh auth login)
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

$ghPaths = @(
    "C:\Program Files\GitHub CLI\gh.exe",
    "$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe"
)

$gh = $ghPaths | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $gh) {
    Write-Host "GitHub CLI no encontrado. Instálalo: winget install GitHub.cli" -ForegroundColor Red
    exit 1
}

# Añadir al PATH de esta sesión (por si la terminal no se reinició tras instalar)
$ghDir = Split-Path $gh -Parent
if ($env:Path -notlike "*$ghDir*") {
    $env:Path = "$ghDir;$env:Path"
}

function Invoke-Gh { & $gh @args }

$repoName = "clinica_dolor"
$isPrivate = $false  # Cambiar a $true para repositorio privado

Write-Host "Comprobando sesión de GitHub..." -ForegroundColor Cyan
Invoke-Gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Primero inicia sesión:" -ForegroundColor Yellow
    Write-Host "  & `"$gh`" auth login" -ForegroundColor White
    exit 1
}

Write-Host "Creando repositorio '$repoName' y subiendo código..." -ForegroundColor Cyan
$visibility = if ($isPrivate) { "--private" } else { "--public" }

Invoke-Gh repo create $repoName $visibility --source=. --remote=origin --description "Landing page Clínica Vitalis - React + Vite + Tailwind" --push

if ($LASTEXITCODE -eq 0) {
    Invoke-Gh repo view --web
    Write-Host "`nListo. Repositorio creado y código subido." -ForegroundColor Green
}
