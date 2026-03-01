$dest = "C:\dev\about.nextain.io\public\assets\pitch-deck"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$files = @(
    "C:\dev\naia-os\assets\character\naia-character.png",
    "C:\dev\naia-os\assets\installer\login-background.jpg",
    "C:\dev\naia.nextain.io\public\manual\ko\main-screen.png",
    "C:\dev\naia.nextain.io\public\manual\ko\lab-dashboard.png",
    "C:\dev\naia.nextain.io\public\manual\ko\chat-text.png",
    "C:\dev\naia.nextain.io\public\manual\ko\onboarding-character.png",
    "C:\dev\naia.nextain.io\public\manual\ko\skills-tab.png",
    "C:\dev\naia.nextain.io\public\manual\ko\channels-tab.png"
)

foreach ($f in $files) {
    if (Test-Path $f) {
        Copy-Item $f $dest
        Write-Host "[OK] $(Split-Path $f -Leaf)"
    } else {
        Write-Host "[SKIP] $f not found" -ForegroundColor Yellow
    }
}

Write-Host "`nDone. $dest" -ForegroundColor Green
