// PDF optimizasyonu için komut satırına rehber
console.log(`
===========================================
PDF Optimizasyonu Rehberi
===========================================

Bu projede bulunan PDF dosyaları büyük boyutlara sahip ve web performansını düşürebilir.
PDF dosyalarını optimize etmek için aşağıdaki adımları izleyebilirsiniz:

1) Ghostscript kullanarak PDF dosyalarını optimize etme:
   - Windows'ta Ghostscript'i yükleyin (https://www.ghostscript.com/download/gsdnld.html)
   - Aşağıdaki PowerShell komutunu çalıştırın (her PDF için):

   & "C:\\Program Files\\gs\\gs10.03.0\\bin\\gswin64c.exe" -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile="optimized_output.pdf" "input.pdf"

   PDFSETTINGS parametreleri:
   - /screen (72 dpi, en düşük kalite)
   - /ebook (150 dpi, orta kalite)
   - /printer (300 dpi, iyi kalite)
   - /prepress (300 dpi, en iyi kalite)

2) Online araçlar kullanarak:
   - https://tools.pdf24.org/tr/optimize-pdf
   - https://smallpdf.com/compress-pdf
   - https://www.adobe.com/tr/acrobat/online/compress-pdf.html

3) Web için lineer PDF'ler oluşturma:
   PDF'leri "Web için optimize et" veya "Hızlı web görünümü için optimize et" seçeneği ile kaydederek
   PDF'lerin daha hızlı yüklenmesini sağlayabilirsiniz.

Optimize edilmiş PDF'leri "public/optimized" klasörüne taşıyabilir ve uygulamanızda bu dosyalara referans verebilirsiniz.

===========================================
`); 