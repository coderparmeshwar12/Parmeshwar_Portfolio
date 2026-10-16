New-Item -ItemType Directory -Force -Path 'public' | Out-Null
New-Item -ItemType Directory -Force -Path 'src/assets/images' | Out-Null
Add-Type -AssemblyName System.Drawing

function Create-PlaceholderImage($filePath) {
    $bmp = New-Object System.Drawing.Bitmap(800, 800)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Dark background #0d0f14
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 13, 15, 20))
    $g.FillRectangle($bgBrush, 0, 0, 800, 800)

    # Gradient rings (Pastel Pink & Lavender)
    $penPink = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 255, 143, 171), [float]6)
    $penLavender = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, 196, 181, 253), [float]3)
    $g.DrawEllipse($penPink, 70, 70, 660, 660)
    $g.DrawEllipse($penLavender, 86, 86, 628, 628)

    # Inner circular dark card
    $innerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 21, 25, 36))
    $g.FillEllipse($innerBrush, 96, 96, 608, 608)

    # Stylized Avatar Silhouette
    $avatarBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 38, 44, 62))
    $g.FillEllipse($avatarBrush, 320, 200, 160, 160)
    $g.FillPie($avatarBrush, 220, 360, 360, 320, 180, 180)

    # Headphone / Developer accent
    $headphonePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 255, 143, 171), [float]10)
    $g.DrawArc($headphonePen, 296, 180, 208, 200, 190, 160)
    $earCupBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 196, 181, 253))
    $g.FillEllipse($earCupBrush, 290, 245, 28, 55)
    $g.FillEllipse($earCupBrush, 482, 245, 28, 55)

    # String format (Centered)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center

    # Font Families (Avoid ambiguous overload resolution)
    $fontFamilyConsolas = New-Object System.Drawing.FontFamily("Consolas")
    $fontFamilySegoe = New-Object System.Drawing.FontFamily("Segoe UI")

    $fontCode = New-Object System.Drawing.Font($fontFamilyConsolas, [float]22, [System.Drawing.FontStyle]::Bold)
    $fontTitle = New-Object System.Drawing.Font($fontFamilySegoe, [float]30, [System.Drawing.FontStyle]::Bold)
    $fontSub = New-Object System.Drawing.Font($fontFamilySegoe, [float]18, [System.Drawing.FontStyle]::Regular)
    $fontSmall = New-Object System.Drawing.Font($fontFamilySegoe, [float]15, [System.Drawing.FontStyle]::Regular)

    $pinkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 143, 171))
    $lavenderBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 196, 181, 253))
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 248, 250, 252))
    $grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 148, 163, 184))

    # Text rendering with explicit coordinates
    $g.DrawString('{ backend: true }', $fontCode, $pinkBrush, [float]400, [float]480, $sf)
    $g.DrawString('YOUR1-PHOTO.jpg', $fontTitle, $whiteBrush, [float]400, [float]530, $sf)
    $g.DrawString('Parmeshwar Shinde', $fontSub, $lavenderBrush, [float]400, [float]590, $sf)
    $g.DrawString('Replace this image with your portrait', $fontSmall, $grayBrush, [float]400, [float]630, $sf)

    # Save and clean up
    $bmp.Save($filePath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
}

Create-PlaceholderImage 'public/YOUR1-PHOTO.jpg'
Create-PlaceholderImage 'src/assets/images/YOUR1-PHOTO.jpg'
Write-Output "Successfully generated placeholder images in public and src/assets/images"
