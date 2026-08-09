# Portofolio Curriculum Vitae Alwan Fajrian

Website portofolio statis ini menggunakan HTML, CSS, dan JavaScript. Semua gambar disimpan di folder `asset` dan halaman utama tersedia di `index.html`.

## Struktur file penting

- `index.html` — halaman utama yang dilayani dari root domain
- `CV Alwan Fajrian.html` — halaman CV utama (salinan `index.html`)
- `CV Referensi.html` — halaman referensi tambahan
- `View All Portofolio.html` — halaman portofolio lengkap
- `Curiculum Vitae.css` — stylesheet utama
- `cv-referensi.css` — stylesheet untuk halaman referensi
- `script.js` — JavaScript interaktif
- `asset/` — semua gambar dan aset media

## Deploy ke GitHub Pages

1. Buat repository GitHub dan tambahkan semua file:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
2. Buka halaman repo di GitHub.
3. Masuk ke `Settings` -> `Pages`.
4. Pilih branch `main` dan folder `/(root)`.
5. Simpan.

> Halaman utama akan tersedia di `https://<username>.github.io/<repo>/`.

## Deploy ke Vercel

1. Buka https://vercel.com dan login.
2. Klik `New Project` -> `Import Git Repository`.
3. Pilih repository kamu.
4. Biarkan pilihan build default jika proyek hanya statis.
5. Pastikan `Root Directory` adalah `/`.
6. Deploy.

> Vercel akan melayani `index.html` dari root, sehingga tidak akan muncul 404 selama file `index.html` dan `asset/` ada di repository.

## Catatan penting

- Jangan ubah nama file `index.html`.
- Pastikan folder `asset/` ikut di-commit (semua gambar berada di dalamnya).
- Jika ingin membuka halaman lain secara langsung, gunakan nama file lengkap seperti `CV Referensi.html` atau `View All Portofolio.html`.
- Jika halaman utama masih 404, pastikan GitHub Pages atau Vercel menargetkan folder root dan bukan subfolder.
