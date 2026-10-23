# Univlop — Preloved Marketplace Mahasiswa Kos

> Prototype interaktif platform jual-beli barang preloved khusus mahasiswa kos-kosan (SIFORIA 2026 UI/UX Showcase).

---

## Tentang Proyek

**Univlop** dirancang untuk memudahkan mahasiswa kos mencari dan menjual perabot, buku, alat kuliah, dan elektronik bekas secara aman, terjangkau, dan berbasis lokasi sekitar kampus.

- **Design System:** Terdokumentasi lengkap di [`DESIGN.md`](./DESIGN.md)
- **Teknologi:** HTML5, CSS3 kustom (Vanilla CSS), JavaScript, Leaflet JS (peta interaktif), dan Vite dev server.

---

## Fitur Utama

1. **Multi-Role Showcase (Persona Switcher):**
   - Mode Pembeli: Eksplorasi katalog, filter harga/kategori/lokasi, keranjang, dan checkout COD/kampus.
   - Mode Penjual: Manajemen listing barang preloved, status pesanan, dan analitik toko.
   - Mode Admin & Moderator: Verifikasi barang, laporan sengketa, dan moderasi akun kampus.

2. **Katalog & Navigasi Cepat:**
   - Pencarian real-time dengan filter instan.
   - Detail produk dengan spesifikasi kondisi barang dan lokasi kos penjual.
   - Skeleton loading dan micro-interactions yang responsif.

3. **Peta & Radius Kampus:**
   - Integrasi Leaflet untuk estimasi jarak titik temu (COD) di area kampus dan kos sekitar.

---

## Cara Menjalankan Secara Lokal

Pastikan [Node.js](https://nodejs.org/) sudah terpasang di komputer Anda.

1. **Clone repository:**
   ```bash
   git clone https://github.com/Atnan49/Univlop.git
   cd Univlop
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. Buka tautan lokal yang tampil di terminal (biasanya `http://localhost:5173/`).

---

## Struktur Berkas

```
Univlop/
├── assets/                  # Aset gambar, ikon SVG, dan ilustrasi produk
├── DESIGN.md                # Dokumentasi panduan desain (warna, tipografi, token)
├── index.html               # Halaman utama aplikasi (Single Page App)
├── style.css                # Desain sistem & stylesheet antarmuka
├── app.js                   # Logika interaktivitas, router mock, & persona switcher
├── skeleton.html            # Komponen skeleton placeholder
├── Loading Animation.html   # Komponen animasi loading
├── package.json             # Konfigurasi dependensi dan script Vite
└── .gitignore               # Konfigurasi pengecualian git
```

---

Dibuat untuk showcase lomba UI/UX SIFORIA 2026.
