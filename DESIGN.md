# Design System: Univlop — Preloved Marketplace untuk Mahasiswa Kos

---

## 0. Design Read

**Produk:** Platform jual-beli barang bekas di kalangan mahasiswa yang tinggal di kos-kosan.
**Target pengguna:** Mahasiswa usia 18–25, budget terbatas, kehidupan serba praktis, mobile-first.
**Vibe:** Bukan luxury marketplace. Bukan e-commerce korporat. Ini terasa seperti papan pengumuman kos yang sudah didesain ulang jadi sesuatu yang bersih, cepat, dan dipercaya.
**Tone visual:** Hangat, relatable, ringan — seperti aplikasi yang dibuat teman sendiri, bukan perusahaan besar.

| Dimensi  | Nilai | Deskripsi |
|----------|-------|-----------|
| Density  | 6     | Balanced — cukup padat untuk marketplace, tidak sesak |
| Variance | 7     | Offset asymmetric — layout tidak monoton, tapi tidak kacau |
| Motion   | 5     | Fluid CSS — smooth tapi hemat performa di HP mid-range |

---

## 1. Visual Theme & Atmosphere

Interface yang terasa **hangat dan dipercaya** — seperti teman kos yang merekomendasikan barang. Bukan dingin seperti Tokopedia, bukan mewah seperti Vinted. Nuansanya adalah **kamar kos yang tertata rapi**: krem muda, aksen tanah, ruang yang tidak penuh sesak.

Layout asimetris dengan komposisi berani di hero — foto produk ditempatkan besar, bukan dikecilkan jadi thumbnail. Navigasi tetap bersih dan cepat karena pengguna mayoritas pakai HP dengan koneksi kampus yang tidak stabil.

Atmosfer keseluruhan: **"Thrift-store yang didesain arsitek muda"** — ada karakter, ada kepercayaan, tidak generik.

---

## 2. Color Palette & Roles

### Base Surfaces
- **Warm Cream** (`#F7F4EF`) — Background utama. Tidak putih, terasa organik
- **Pure Linen** (`#FFFFFF`) — Card, modal, container produk
- **Chalk Mist** (`#F0ECE5`) — Background section sekunder, tag filter

### Text
- **Deep Charcoal** (`#1C1917`) — Heading utama, nama produk, harga
- **Warm Slate** (`#57534E`) — Deskripsi, caption, metadata (lokasi kos, waktu posting)
- **Faded Clay** (`#A8A29E`) — Placeholder, disabled state, label form

### Structural
- **Hairline Sand** (`rgba(214,207,198,0.6)`) — Border card 1px, divider antar section
- **Shadow Dusk** (`rgba(28,25,23,0.08)`) — Box shadow card, elevasi produk

### Accent (satu, tidak lebih)
- **Terracotta Active** (`#C2693B`) — CTA utama, focus ring, badge aktif. Saturation terkontrol.

### Status Colors
- **Moss Confirm** (`#4A7C59`) — Barang tersedia, transaksi sukses
- **Dusty Amber** (`#C9922A`) — Peringatan, barang hampir habis
- **Muted Crimson** (`#B44C4C`) — Error, barang terjual, form invalid

---

## 3. Typography Rules

### Font Stack
- **Display / Heading:** `Outfit` (Google Fonts) — Geometrik modern, karakter kuat tapi tidak kaku
- **Body / UI:** `Satoshi` (Fontshare) — Humanis, mudah dibaca di layar kecil
- **Mono / Harga / Kode:** `JetBrains Mono` — Harga (Rp 45.000), kode transaksi, timestamp

### Scale & Sizing
```
Display XL  : Outfit 700, 2.5rem / 40px   — Hero headline
Display L   : Outfit 700, 2rem / 32px     — Section title
Heading     : Outfit 600, 1.5rem / 24px   — Nama produk di card
Subheading  : Satoshi 500, 1.125rem / 18px — Label kategori, tab aktif
Body        : Satoshi 400, 1rem / 16px    — Deskripsi, teks umum
Caption     : Satoshi 400, 0.875rem / 14px — Metadata (lokasi, waktu)
Price       : JetBrains Mono 700, 1.25rem / 20px — Harga produk
Code/Ref    : JetBrains Mono 400, 0.8125rem / 13px — Kode transaksi
```

### Rules
- Max line-length body: 65 karakter
- Line-height body: 1.6
- Letter-spacing heading: -0.02em
- Harga SELALU pakai JetBrains Mono
- **DILARANG:** Inter, Poppins sebagai font utama

---

## 4. Component Stylings

### Buttons
- **Primary:** Background `#C2693B`, teks putih, border-radius `0.75rem`, padding `0.75rem 1.5rem`. Active: `-1px translateY` (tactile push). Tidak ada outer glow.
- **Secondary / Ghost:** Border 1.5px Hairline Sand, teks Deep Charcoal. Hover: background Chalk Mist.
- **Destructive:** Background `#B44C4C`, struktur sama dengan Primary.
- **Minimum tap target:** 44×44px — wajib semua tombol.

### Cards (Product Card)
- Background `#FFFFFF`, border-radius `1rem`
- Box-shadow: `0 2px 8px rgba(28,25,23,0.08)`
- Foto produk rasio 4:3, `object-fit: cover`, border-radius top saja
- Badge kondisi di pojok kiri atas foto: pill kecil, background Chalk Mist
- Hover: shadow `0 6px 20px rgba(28,25,23,0.14)` + `translateY(-2px)`
- **Tidak ada cards 3-kolom sama rata** — 2-kolom mobile, asymmetric featured desktop

### Inputs & Forms
- Label **di atas** input, ukuran Caption
- Border: 1.5px Hairline Sand; focus: 2px ring `#C2693B`
- Border-radius: `0.625rem`; Placeholder: Faded Clay
- Error text **di bawah** input, warna `#B44C4C`
- **Tidak ada floating labels**

### Navigation (Bottom Nav — Mobile)
- Background Pure Linen, border-top Hairline Sand
- 5 tab: Beranda · Jelajah · Jual · Notifikasi · Profil
- Ikon SVG Lucide 24×24px — **tidak ada emoji sebagai ikon**
- Active: `#C2693B` + label muncul. Inactive: Faded Clay

### Chip / Filter Tag
- Background Chalk Mist, border 1px Hairline Sand, pill radius
- Active: background `#C2693B`, teks putih
- Padding `0.5rem 1rem`, Satoshi 500

### Skeleton Loader
- Dimensi sama persis dengan komponen asli
- Shimmer Chalk Mist → Pure Linen, kiri ke kanan, 1.4s infinite
- **Tidak ada circular spinner**

### Badge / Status
- Tersedia: background `rgba(74,124,89,0.12)`, teks `#4A7C59`
- Terjual: background `rgba(180,76,76,0.12)`, teks `#B44C4C`, judul dicoret
- Baru Diposting: background `rgba(194,105,59,0.12)`, teks `#C2693B`

---

## 5. Layout Principles

### Grid System
- Mobile `< 768px`: 1 kolom, gutter 16px, padding horizontal 16px
- Tablet `768px–1024px`: 2 kolom produk, gutter 20px
- Desktop `> 1024px`: 3–4 kolom dengan featured card asimetris, max-width 1400px centered

### Hero Section
- **Bukan centered** — split: kiri teks + CTA, kanan foto produk besar
- Tidak ada teks di atas foto (no overlay text)
- Satu CTA saja: "Jelajahi Barang" atau "Mulai Jual"
- **Tidak ada:** scroll indicator, bouncing chevron

### Spacing Scale
```
4px  — micro gap (badge internal)
8px  — tight (ikon ke label)
12px — compact (padding card kecil)
16px — base (padding konten utama)
24px — comfortable (antar elemen dalam section)
32px — section internal
48px — section gap
64px — generous (hero padding vertikal)
```
Section gap responsif: `clamp(3rem, 8vw, 6rem)`

### Rules
- CSS Grid — bukan flexbox `calc()` hacks
- Full-height sections: `min-height: 100dvh` — bukan `100vh`
- Tidak ada elemen overlap — setiap elemen punya zona bersih
- **Tidak ada 3 kolom card sama rata**

---

## 6. Motion & Interaction

### Prinsip Dasar
- Spring: `cubic-bezier(0.34, 1.56, 0.64, 1)` untuk elemen pop/emerge
- Fade+slide: `cubic-bezier(0.4, 0, 0.2, 1)` untuk transisi halaman
- Animasi via `transform` dan `opacity` SAJA — tidak pernah `top`, `left`, `width`, `height`
- Durasi: 150ms (micro) / 250ms (component) / 350ms (page transition)
- Fallback `prefers-reduced-motion: reduce` wajib ada

### Micro-interactions Wajib
| Komponen       | Perilaku                                        |
|----------------|-------------------------------------------------|
| Product Card   | `translateY(-2px)` + shadow naik, 200ms          |
| Primary Button | `-1px translateY` saat active, 100ms             |
| Bottom Nav Tab | Icon scale 1 → 1.15 saat active, 200ms spring   |
| Chip Filter    | Background fill left-to-right, 180ms            |
| Skeleton       | Shimmer sweep left-to-right, 1.4s infinite      |
| Image load     | Fade in dari opacity 0, 300ms setelah loaded    |

### Staggered List Reveal
- Card muncul cascade: delay 40ms per card
- Maksimum 6 card per batch — setelah itu tanpa delay
- Trigger: IntersectionObserver, threshold 0.1

### Page Transitions
- Antar halaman: fade + slide 8px dari bawah, 280ms
- Modal/Bottom Sheet: slide dari bawah spring, backdrop fade 200ms

---

## 7. Konten & Copywriting Rules

### Tone
- Bahasa Indonesia kasual tapi bersih — seperti teman, bukan customer service
- **Dilarang:** "Seamless", "Elevate", "Next-Gen", "Solusi terbaik", "Platform terpercaya"
- Gunakan bahasa nyata: "Barang kamu laku lebih cepat" bukan "Optimalkan penjualan Anda"
- Harga: format `Rp 45.000` (titik ribuan, tanpa desimal)

### Placeholder Content
- Nama pengguna: Fikri, Rania, Dinda, Alif, Sinta — **bukan "John Doe" atau "User123"**
- Produk: "Kipas angin Miyako bekas mulus", "Meja belajar lipat kayu", "Rice cooker 0.3L"
- Harga realistis: Rp 25.000 – Rp 800.000
- Lokasi: "Kos daerah Tembalang", "Dekat UNDIP", "Kos Jl. Veteran"
- Foto: `picsum.photos` — bukan Unsplash link hardcoded

---

## 8. Anti-Patterns — Dilarang Keras

| Larangan                              | Alasan                              |
|---------------------------------------|-------------------------------------|
| Emoji sebagai ikon UI                 | Gunakan SVG Lucide / Heroicons      |
| Font Inter atau Poppins sebagai utama | Terlalu generik untuk lomba         |
| Warna murni hitam #000000             | Pakai Deep Charcoal #1C1917         |
| Neon glow / outer box-shadow terang   | Terlihat murahan                    |
| 3 kolom card sama rata                | Terlalu template-ish                |
| Hero section center-align             | Variance 7 = harus asimetris        |
| Teks di atas foto (overlay)           | Readability buruk                   |
| Scroll indicator / bouncing arrow     | Filler, buang ruang                 |
| Saturasi aksen > 80%                  | Membuat mata lelah                  |
| Gradient teks di heading besar        | AI cliché                           |
| Placeholder "John Doe", "Acme Corp"   | Tidak authentic                     |
| Angka bulat "99.9% puas"             | Tidak credible                      |
| Animasi width, top, left              | Menyebabkan layout thrash           |
| h-screen / 100vh tanpa dvh fallback   | Crash di iOS Safari                 |
| Unsplash link hardcoded               | Link bisa 404                       |
| Custom mouse cursor                   | Mengganggu UX                       |
| Dua aksen warna atau lebih            | Palet jadi kacau                    |

---

## 9. Spesifikasi Per Role

### Frontend User — Pembeli
Prioritas: **kecepatan browse dan kepercayaan**
- Grid produk dengan skeleton loader identik dimensinya
- Filter kategori: chip horizontal scroll (tidak wrap ke baris baru)
- Detail produk: foto besar atas, info seller + avatar + rating, tombol "Hubungi Penjual" via WhatsApp
- Wishlist dengan animasi heart fill spring
- Checkout: form minimal — nama, nomor WA, metode bayar, lokasi COD kos

### Frontend User — Penjual
Prioritas: **kemudahan upload dan monitoring**
- Upload foto: max 5 foto, drag-and-drop / tap-to-upload, preview langsung
- Form jual: judul, kategori, kondisi (Baru / Bekas Mulus / Bekas Layak), harga, deskripsi, lokasi kos
- Dashboard: daftar barang dengan status (Aktif / Terjual / Draft) — tanpa chart kompleks
- Notifikasi pembeli: bottom sheet dengan preview pesan

### Frontend Admin
Prioritas: **efisiensi monitoring dan moderasi**
- Sidebar navigasi (bukan bottom nav)
- Tabel pengguna & produk: density tinggi, font mono untuk ID dan angka
- Moderasi: approve / reject dengan alasan, tampilan list bukan grid
- Statistik: kartu angka sederhana — total pengguna, produk aktif, transaksi hari ini
- Filter tanggal dan status wajib ada di setiap tabel

---

*DESIGN.md ini adalah sumber kebenaran tunggal untuk seluruh tim Univlop. Semua keputusan visual mengacu ke dokumen ini.*
