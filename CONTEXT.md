# Kişisel Portfolio Web Sitesi - İçerik ve Gereksinimler

## 👤 Hakkında
Bu proje, bilgisayar mühendisliği son sınıf öğrencisi tarafından oluşturulacak kişisel portfolyo ve CV sitesidir. Amaç; kişisel bilgileri, projeleri ve CV'yi tek bir yerde toplayarak, iş/staj başvurularında ve profesyonel görünürlükte etkili bir dijital alan yaratmaktır.

## 🧱 Site Yapısı (Tek Sayfa Scroll Layout)
Web sitesi **tek sayfa** yapıda olacak ve aşağıdaki bölümleri içerecektir:

### 1. Hero / Giriş
- Kısa tanıtım yazısı (örneğin: “Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer”)
- Navigasyon bağlantıları: Hakkımda, Projeler, CV, İletişim

### 2. Hakkımda (About)
- Kısa biyografi
- Eğitim bilgisi
- Teknoloji stack (React, Node.js, Python, vs.)
- Kişisel ilgi alanları

### 3. Projeler (Projects)
- 3 ila 6 adet proje
- Her biri için:
  - Proje adı
  - Kısa açıklama
  - Kullanılan teknolojiler
  - GitHub ve/veya canlı demo linki


### 4. CV
- Web üzerinden okunabilir formatta CV içeriği
- PDF olarak indirilebilir bağlantı

### 5. İletişim (Contact)
- E-posta adresi
- LinkedIn ve GitHub bağlantıları
- (İsteğe bağlı) Basit bir iletişim formu (örneğin formsubmit.io veya Netlify Forms kullanılabilir)

## 🎨 Tasarım
- Tema: **Koyu tema**
- Renk paleti:
  - Ana arka plan: `#181817` (24,24,23)
  - Koyu mavi tonları:
    - `#0a1543` (10,21,67)
    - `#19327f` (25,50,127)
    - `#021fa0` (2,31,160)
    - `#1b45d7` (27,69,215)
- Yazı rengi: Açık gri / beyaz tonları önerilir
- Butonlar ve linkler vurgulu renklerle (örneğin `#1b45d7`)

## 🧑‍💻 Teknoloji Tercihleri
- Framework: **Next.js**
- Stil: Tailwind CSS önerilir
- Blog için Markdown destekli içerik yönetimi tercih edilebilir (örn. MDX)
- Deploy: GitHub Pages, Vercel ya da Netlify üzerinden yapılabilir

## 📝 Diğer Notlar
- Site hem masaüstü hem mobil uyumlu olmalıdır (responsive design).
- Animasyon ve geçiş efektleri sade ve profesyonel olmalı.
- Kod temizliği ve komponent yapısı önemlidir.
