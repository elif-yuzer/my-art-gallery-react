PROJECT_FIXES.md

Amaç
----
Bu doküman proje köküne bırakıldı. Projedeki eksiklikleri, tutarsızlıkları ve CSS/asset sorunlarını adım adım nasıl düzelteceğinizle ilgili açık komutlar (PowerShell ve evrensel npm/git komutları) ve örnek dosya içerikleri içerir. Her adımı okuyup sırayla uygulayabilirsiniz.

Ön koşullar
-----------
- Node.js ve npm yüklü olmalı
- Git yapılandırılmış olmalı (username/email, uzak repo eklendi)
- PowerShell (Windows) veya bash terminali

Hızlı kontroller
----------------
PowerShell (Windows) veya bash:

- Repodaki durum:
  git --no-pager status --porcelain -uall

- Bağımlılık yükle:
  npm install

- Geliştirme sunucusunu çalıştır:
  npm run dev

- Yap build ve lint testleri:
  npm run build
  npm run lint

Adım 1 — db.json ve API script
-------------------------------
Sorun: package.json içinde "api" script'i var ancak db.json repo'da yok; .gitignore db.json'i hariç tutuyor.
Öneri: db.json.example oluşturun, gerçek db.json'ı yerel geliştirme için oluşturup .gitignore'da bırakın.

PowerShell komutları:

@"
{
  "artists": [],
  "artworks": []
}
"@ | Out-File -FilePath db.json.example -Encoding utf8

Açıklama: db.json.example içinde örnek yapıyı tutun; gerçeğini git'e eklemeyin.

Adım 2 — README.md güncellemesi
-------------------------------
Eklenecekler: kurulum adımları, geliştirme, API çalıştırma, deploy notu.
README'ye ekle (örnek snippet):

- npm install
- npm run dev (veya npm run start)
- npm run api  # json-server ile API

Adım 3 — package.json metadata
-------------------------------
Güncelle: name, description, author, repository alanları.
Manuel düzenleme veya PowerShell (örnek):

# manuel: code package.json ve alanları doldur
notepad package.json

Adım 4 — LICENSE ekle
----------------------
Öneri: MIT lisansı. Hızlı ekleme:

@"
MIT License

Copyright (c) 2026 <Your Name>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
"@ | Out-File -FilePath LICENSE -Encoding utf8

Adım 5 — ESLint yapılandırması
------------------------------
package.json'da eslint bağımlılıkları var ama .eslintrc yok.
Örnek .eslintrc.json oluştur:

@"
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended","plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {"jsx": true}
  },
  "settings": {"react": {"version": "detect"}},
  "rules": {}
}
"@ | Out-File -FilePath .eslintrc.json -Encoding utf8

Doğrulama:
  npm run lint

Adım 6 — Büyük medya dosyalarını tespit ve temizleme
-----------------------------------------------------
Büyük resim/gif dosyalarını bulun ve gerekliyse optimize edin:

PowerShell (büyük dosyalar > 3MB):
  Get-ChildItem -Path . -Recurse | Where-Object {$_.Length -gt 3MB} | Sort-Object Length -Descending | Select-Object FullName,Length

Gerektiğinde commit etmeyin: optimize ettikten sonra değişiklikleri commitleyin.

Adım 7 — CSS eksikleri ve tutarsızlıklar
---------------------------------------
Kontroller ve komutlar:

- Tüm bileşenlerde inline style veya style attribute arama:
  Select-String -Path .\src\**\*.{js,jsx,ts,tsx,html} -Pattern "style=|className=\"\"" -SimpleMatch

- index.css ve component css dosyalarını kontrol et: tutarlı değişken/renk kullanımı, responsive breakpoints.
- Bootstrap ile çakışma: custom CSS sınıfları bootstrap ile çakışıyorsa class isimlerini daha spesifik yapın.

Hızlı öneriler:
- global değişkenler için :root kullanın
- resimler için max-width:100%; height:auto;
- responsive test: tarayıcıda mobil görünüm test edin

Adım 8 — Tutarsızlık tespiti (kod, router, veri akışı)
------------------------------------------------------
- Router versiyon kontrolü: package.json react-router-dom v7 var; kod dosyalarınız v6/7 uyumsuzluğu olabilir. Router kullanımı (AppRouter.jsx) ile paket versiyonunu eşleştirin.
- Konsol hatalarını görmek için dev sunucuda tarayıcı console'u açın.

Ara komutlar:
- Tüm .jsx dosyalarında "react-router" importlarını tarama:
  Select-String -Path .\src\**\*.jsx -Pattern "react-router" -SimpleMatch

Adım 9 — CI (GitHub Actions) önerisi
-----------------------------------
Kök dizine .github/workflows/ci.yml ekleyin. Örnek içerik (kısa):

name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: {node-version: '20'}
      - run: npm ci
      - run: npm run lint
      - run: npm run build

Bu dosyayı oluşturmak için (PowerShell):

New-Item -ItemType Directory -Path .github\workflows -Force
# içerik yapıştırılabilir

Adım 10 — .gitattributes, .env.example, CONTRIBUTING.md
-------------------------------------------------------
Örnek .env.example (eğer env kullanıyorsanız):

REACT_APP_API_URL=http://localhost:5178

.gitignore zaten var; gerekli görünmeyen dosyaları ekleyin.

Doğrulama ve commit adımları
---------------------------
1) Değişiklikleri yerel test edin (npm run dev, lint, build)
2) Git add/commit/push (PowerShell örneği):

git add .
git commit -m "chore: project cleanup and add project fixes doc"
git push origin main

Not: Commit mesajlarınızda ortak katkıda bulunan yoksa Co-authored-by kullanmayın; eğer Copilot tarafından otomatik commit isterseniz bana söyleyin.

İpuçları — kontrol listesi
-------------------------
- [ ] db.json.example oluşturuldu
- [ ] README güncellendi (kurulum + run)
- [ ] LICENSE eklendi
- [ ] .eslintrc.json eklendi ve lint geçti
- [ ] Büyük medya dosyaları optimize edildi veya .gitignore'a alındı
- [ ] CI workflow eklendi
- [ ] .env.example ve .gitattributes eklendi

Yardım isterseniz
-----------------
Bu dokümanı uygularken adım adım yardımcı olabilirim: örnek dosyaları repo'ya ben ekleyebilirim veya her bir dosya için hazır içeriği ayrı dosya olarak oluşturup commit edebilirim. Hangi adımı önce uygulamak istersiniz?

Vercel’de db.json deploy etme (önerilen yöntem)
----------------------------------------------
Amaç: db.json içeriğini Vercel üzerinde statik dosya olarak değil, Vercel API (serverless functions) aracılığıyla sunmak. Böylece client /api/ endpoints ile veriye erişir.

1) Proje kökünde db.json oluşturup commitleyin (örnek küçük veri):

{
  "artists": [
    { "id": 1, "name": "Claude Monet" }
  ],
  "artworks": [
    { "id": 1, "title": "Water Lilies", "artistId": 1 }
  ]
}

2) Vercel API dosyalarını ekleyin (proje kökünde api/ klasörü):

api/artists.js
---------------
import fs from 'fs';
import path from 'path';
export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), 'db.json');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  res.status(200).json(db.artists || []);
}

api/artworks/[id].js
---------------------
import fs from 'fs';
import path from 'path';
export default function handler(req, res) {
  const { id } = req.query;
  const db = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'db.json'), 'utf8'));
  const item = (db.artworks || []).find(a => String(a.id) === String(id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.status(200).json(item);
}

3) Client tarafı kullanım (örnek axios/fetch):

// axios
axios.get('/api/artists').then(r => setArtists(r.data));

// fetch
fetch('/api/artists').then(r => r.json()).then(data => console.log(data));

4) Deploy adımları (git + Vercel CLI):

git add db.json api/
git commit -m "chore: add db.json and Vercel API endpoints"
git push origin main

# Vercel CLI (local deploy)
npm i -g vercel
vercel login
vercel --prod

Alternatif: public/db.json
--------------------------
Eğer endpoint istemiyorsanız db.json'i public/ içine koyabilirsiniz: public/db.json ve client'ta fetch('/db.json'). Bu yöntem REST filtreleri sunmaz; veriyi client içinde filtrelemeniz gerekir.

Güvenlik/öneriler
-----------------
- Eğer db.json hassas veri içeriyorsa git'e eklemeyin; yerine çevrimiçi bir veri kaynağı (private storage, external API veya veritabanı) kullanın.
- Büyük veriler için ayrı bir host (Render, Railway, Heroku) veya gerçek veritabanı tercih edin.
- Vercel dosya okuma (fs) sadece build-time veya edge fonksiyonlarda sınırlı olabilir; yukarıdaki approach genelde Node serverless fonksiyonlarında çalışır. Sorun çıkarsa db.json'i küçük tutun veya external API'ye taşıyın.

İstersen bu dosyaları ben repo'ya ekleyip commit/push yapabilirim; onay verin, kendim ekleyeyim ve gerekli komutları çalıştırmanız için adımları veririm.