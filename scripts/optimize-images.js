// Görselleri WebP formatına dönüştüren script
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);
const readdir = promisify(fs.readdir);

// Optimize edilecek klasörler
const folders = [
  'public/certificates',
  'public/projects',
  'public/cv'
];

async function directoryExists(directory) {
  try {
    await access(directory);
    return true;
  } catch (error) {
    return false;
  }
}

async function ensureDirectoryExists(directory) {
  const exists = await directoryExists(directory);
  if (!exists) {
    await mkdir(directory, { recursive: true });
  }
}

async function analyzeFolder(folder) {
  try {
    console.log(`${folder} klasöründeki görseller inceleniyor...`);
    
    const files = await readdir(folder);
    
    // Görsel dosyalarını filtrele
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    });
    
    // Toplam boyutu hesapla
    let totalSize = 0;
    for (const file of imageFiles) {
      const filePath = path.join(folder, file);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
      console.log(`- ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
    }
    
    console.log(`${folder} klasöründe ${imageFiles.length} görsel dosyası bulunuyor.`);
    console.log(`Toplam boyut: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log('--------------------------------------');
    
    return {
      folder,
      fileCount: imageFiles.length,
      totalSize
    };
  } catch (error) {
    console.error(`${folder} klasöründeki görseller incelenirken hata oluştu:`, error);
    return {
      folder,
      fileCount: 0,
      totalSize: 0,
      error: error.message
    };
  }
}

async function analyzePdfFolder(folder) {
  try {
    console.log(`${folder} klasöründeki PDF'ler inceleniyor...`);
    
    const files = await readdir(folder);
    
    // PDF dosyalarını filtrele
    const pdfFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ext === '.pdf';
    });
    
    // Toplam boyutu hesapla
    let totalSize = 0;
    for (const file of pdfFiles) {
      const filePath = path.join(folder, file);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
      console.log(`- ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
    }
    
    console.log(`${folder} klasöründe ${pdfFiles.length} PDF dosyası bulunuyor.`);
    console.log(`Toplam boyut: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log('--------------------------------------');
    
    return {
      folder,
      fileCount: pdfFiles.length,
      totalSize
    };
  } catch (error) {
    console.error(`${folder} klasöründeki PDF'ler incelenirken hata oluştu:`, error);
    return {
      folder,
      fileCount: 0,
      totalSize: 0,
      error: error.message
    };
  }
}

async function main() {
  console.log('Dosya analizi başlatılıyor...');
  
  // Tüm klasörleri analiz et
  for (const folder of folders) {
    await analyzeFolder(folder);
  }
  
  // PDF klasörlerini analiz et
  for (const folder of folders) {
    if (folder.includes('certificates') || folder.includes('cv')) {
      await analyzePdfFolder(folder);
    }
  }
  
  console.log('\nOptimizasyon Önerileri:');
  console.log('1. Sertifika görselleri için WebP formatını kullanın (dosya boyutunu %30-50 azaltabilir)');
  console.log('2. Görselleri yeniden boyutlandırın (genişlik: 800px yeterli olabilir)');
  console.log('3. PDF dosyalarını Ghostscript veya online araçlarla optimize edin');
  console.log('4. next/image komponentini kullanarak otomatik optimizasyon yapın');
  
  console.log('\nDosya analizi tamamlandı.');
}

main().catch(console.error); 