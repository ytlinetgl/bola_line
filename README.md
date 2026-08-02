# ⚽ Prediksi Bola Auto Generator

### GitHub Pages Edition — LINE TOGEL

Generator prediksi bola otomatis untuk **LINE TOGEL** — **pure HTML/JS**, tanpa PHP backend, 100% static, deploy gratis di GitHub Pages.

---

## 🏷️ Brand

| # | Brand | File Generator | File Auto Embed | Tema Warna |
|---|-------|---------------|-----------------|------------|
| 1 | **LINE TOGEL** | `linetogel.html` | `linetogel-auto.html` | Neon Purple |

---

## ✨ Fitur Utama

- **Auto Fetch Prediksi** — Ambil data prediksi otomatis via multi-proxy fallback + auto refresh setiap 5 menit
- **Logo Lookup 8-Step Fuzzy** — Database 30.000+ logo tim sepakbola, dengan SVG fallback inisial jika logo tidak ditemukan
- **Override Logo Manual** — File `logo-db.js` untuk menambah/menimpa logo dari database utama
- **Responsive Design** — Output HTML otomatis menyesuaikan tampilan mobile dan desktop
- **Tanggal Otomatis** — Rentang tanggal prediksi dihitung secara otomatis
- **WordPress-Proof CSS** — Semua styling input/select pakai `!important` agar tidak di-override theme WordPress
- **100% Static** — Tidak butuh server backend, deploy langsung di GitHub Pages

---

## 📁 Struktur Repository

```
bolaauto/
│
├── index.html                  ← Menu utama
│
├── linetogel.html              ← Generator LINE TOGEL
├── linetogel-auto.html         ← Auto Embed (standalone)
├── linetogel-main.js           ← Script utama LINE TOGEL
│
├── logo-db-0.js … logo-db-9.js ← Database logo tim (30.000+ entries, split 10 file)
├── logo-db.js                  ← ★ Override logo manual (di-load paling akhir)
│
└── README.md
```

---

## 🚀 Cara Deploy ke GitHub Pages

1. **Push** semua file ke repository GitHub
2. Buka **Settings** → **Pages**
3. Pilih Source: **branch `main`**, folder: **`/ (root)`**
4. Tunggu build selesai, akses via:

```
https://<username>.github.io/bolaauto/
https://<username>.github.io/bolaauto/linetogel.html
```

---

## 📝 Format Input Prediksi

Paste teks prediksi ke dalam textarea generator dengan format berikut:

```
WORLD CUP 2026 [ IN CANADA, MEXICO & USA ]
19/07 04:00 WIB France VS England 0 : 2

NORWAY ELITESERIEN
18/07 19:00 WIB [6] Ham-Kam VS [1] Tromso 2 : 1
18/07 21:00 WIB [15] Kristiansund VS [7] Sarpsborg 08 1 : 3
```

**Aturan parsing:**

| Elemen | Keterangan |
|--------|-----------|
| Baris tanpa jam | Otomatis dikenali sebagai **nama liga** |
| `[6]`, `[1]` dst | Angka klasemen — otomatis **di-strip**, tidak tampil di output |
| Skor | Bisa pakai `:` atau `-` sebagai pemisah |
| Suffix `[W]`, `U19`, `U21` | Otomatis dibersihkan saat lookup logo |

---

## ⚡ Auto Embed untuk WordPress

Paste kode berikut ke halaman WordPress (Custom HTML block):

```html
<!-- LINE TOGEL Auto Embed v4 — NO inline JavaScript -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<div id="linetogel-root"></div>
<style>
#linetogel-root .ibc-loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:14px;font-family:'Poppins',sans-serif;background:#000000;border-radius:12px;padding:30px 20px;}
#linetogel-root .ibc-spinner{width:46px;height:46px;border:4px solid #CE4FFF33;border-top-color:#CE4FFF;border-radius:50%;animation:ibcSpin .7s linear infinite;}
@keyframes ibcSpin{to{transform:rotate(360deg)}}
#linetogel-root .ibc-loading-text{color:#CE4FFF;font-size:13px;font-weight:700;letter-spacing:1.5px;text-shadow:0 0 10px #CE4FFF80;text-align:center;}
#linetogel-root .ibc-loading-sub{color:#CE4FFF80;font-size:10px;letter-spacing:1px;text-align:center;margin-top:-8px;}
</style>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-0.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-1.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-2.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-3.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-4.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-5.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-6.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-7.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-8.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db-9.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/logo-db.js"></script>
<script src="https://shortcutpro.github.io/bolaauto/linetogel-main.js"></script>
```

---

## 🔧 Tambah / Override Logo Manual

Edit file **`logo-db.js`** — file ini di-load **paling akhir** sehingga otomatis menimpa entry dari database utama (`logo-db-0.js` s/d `logo-db-9.js`):

```javascript
Object.assign(LOGO_DB, {
    "manchester united": "https://example.com/logo-manu.png",
    "ham-kam":           "https://example.com/logo-hamkam.png",
    "persib bandung":    "https://example.com/logo-persib.png"
});
```

> ⚠️ Key (nama tim) harus **lowercase**.

---

## 🔍 Logo Lookup — 8-Step Fuzzy Matching

Sistem pencarian logo menggunakan 8 langkah matching bertingkat untuk menemukan logo tim yang tepat:

1. **Exact match** — Nama tim persis sama
2. **Lowercase match** — Perbandingan case-insensitive
3. **Strip suffix** — Hapus `[W]`, `U19`, `U21`, `FC`, dll
4. **Strip prefix** — Hapus angka klasemen `[6]`, `[1]`
5. **Alias/abbreviation** — Cek singkatan umum
6. **Partial match** — Cocokkan sebagian nama
7. **Word-level match** — Cocokkan per kata
8. **SVG Fallback** — Jika tidak ditemukan, generate badge SVG dengan inisial tim

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Database Logo | JavaScript Object (`LOGO_DB`), 30.000+ entries |
| Hosting | GitHub Pages (static) |
| Data Source | Auto fetch via multi-proxy CORS |

---

## 📄 Lisensi

Internal use only — **ShortcutPro** © 2025–2026

---

> Dibuat oleh **[shortcutpro](https://github.com/shortcutpro)** — Pure HTML/JS, zero dependencies, zero backend.
