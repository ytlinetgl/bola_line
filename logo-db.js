// ══════════════════════════════════════════════════════════════════
//  LOGO-DB MANUAL — INPUT LOGO TIM SECARA MANUAL
// ══════════════════════════════════════════════════════════════════
//  File ini di-load PALING AKHIR (setelah logo-db-0.js s/d logo-db-9.js),
//  jadi entry di sini akan MENIMPA (override) logo dari database utama.
//
//  Cara pakai:
//  1. Key WAJIB lowercase, sama persis dengan nama tim di input prediksi
//     (tanpa [angka] klasemen — angka otomatis di-strip oleh generator).
//  2. Value = URL gambar logo (png/jpg/svg/webp).
//  3. Simpan file, refresh halaman generator. Selesai.
//
//  Contoh:
//  "manchester united": "https://r2.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png",
//  "ham-kam": "https://contoh.com/logo/hamkam.png",
//  "norway [w]": "https://contoh.com/logo/norway-women.png",
// ══════════════════════════════════════════════════════════════════

if (typeof LOGO_DB === 'undefined') var LOGO_DB = {};
Object.assign(LOGO_DB, {

    // ── TAMBAHKAN LOGO MANUAL DI BAWAH SINI ──────────────────────
    // "nama tim lowercase": "https://url-logo.png",



});
