$dest = "C:\dev\about.nextain.io\public\assets\pitch-deck-en"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$files = @(
    "C:\dev\naia-os\assets\character\naia-character.png",
    "C:\dev\naia-os\assets\installer\login-background.jpg",
    "C:\dev\naia.nextain.io\public\manual\en\main-screen.png",
    "C:\dev\naia.nextain.io\public\manual\en\lab-dashboard.png",
    "C:\dev\naia.nextain.io\public\manual\en\chat-text.png",
    "C:\dev\naia.nextain.io\public\manual\en\onboarding-character.png",
    "C:\dev\naia.nextain.io\public\manual\en\skills-tab.png",
    "C:\dev\naia.nextain.io\public\manual\en\channels-tab.png"
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
