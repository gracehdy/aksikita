## Deskripsi Proyek
 
AksiKita adalah platform *civic tech* berbasis lokasi yang memungkinkan masyarakat untuk melaporkan permasalahan umum di sekitar mereka, kemudian mengubah laporan tersebut menjadi **aksi nyata** yang dikoordinasikan oleh relawan komunitas.

### Tujuan
 
- Membangun sistem pelaporan permasalahan umum skala kecil berbasis lokasi yang mudah diakses (*crowd-sourced*).
- Merancang platform gotong royong digital untuk penanganan masalah secara mandiri oleh komunitas.
- Menyediakan sarana koordinasi dan pengakuan kontribusi bagi relawan.
- Meningkatkan kesadaran pemerintah terhadap masalah lokal melalui data yang transparan dan publik.

## Prasyarat (Prerequisites)
 
Pastikan perangkat kamu sudah terinstal:
[Bun](https://bun.sh/) `>= 1.0.0`  Runtime & package manager utama 
[PostgreSQL](https://www.postgresql.org/) `>= 14.x` Database utama 
[Git](https://git-scm.com/) latest Version control

## Instalasi & Setup
 
### 1. Clone Repositori
 
```bash
git clone https://github.com/username/aksikita.git
cd aksikita
```
 
### 2. Install Dependencies
 
```bash
bun install
```
 
> Perintah ini akan menginstal semua dependencies untuk seluruh workspace (monorepo) sekaligus.
 
### 3. Konfigurasi Environment Variables
 
```bash
# Backend API
cp apps/api/.env.example apps/api/.env
 
# Frontend
cp apps/web/.env.example apps/web/.env
```
 
Lengkapi variabel yang diperlukan (lihat bagian [Environment Variables](#️-environment-variables) di bawah).
 
### 4. Setup Database
 
```bash
# Jalankan migrasi database
cd apps/api
bunx prisma migrate dev
 
# (Opsional) Isi data awal / seed
bunx prisma db seed
```
 
### 5. Jalankan Aplikasi
 
**Jalankan semua aplikasi sekaligus (direkomendasikan):**
 
```bash
# Dari root direktori
bun run dev
```
 
**Atau jalankan masing-masing secara terpisah:**
 
```bash
# Backend API (NestJS) — berjalan di http://localhost:3000
cd apps/api && bun run start:dev
 
# Frontend (Vue.js) — berjalan di http://localhost:5173
cd apps/web && bun run dev
```

## Struktur Folder
 
```
├── apps/
│ ├── api/ # NestJS backend API
│ └── web/ # Vue.js frontend application
├── packages/types/ # Shared TypeScript types/interfaces
├── turbo.json # Turborepo configuration
└── package.json # Root package.json
```

## Environment Variables
 
### Backend (`apps/api/.env`)
 
```env
# ==============================
# DATABASE
# ==============================
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/aksikita_db"

# ==============================
# APP CONFIG
# ==============================
PORT=3000
NODE_ENV=development
 
# ==============================
# AUTHENTICATION
# ==============================
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
 
# ==============================
# MAPS / GEOLOCATION (opsional)
# ==============================
MAPS_API_KEY=your_maps_api_key
```
 
### Frontend (`apps/web/.env`)
 
```env
# ==============================
# API
# ==============================
VITE_API_BASE_URL=http://localhost:3000
 
```
 
> ** Penting:** Jangan pernah meng-*commit* file `.env` ke repositori. Pastikan `.env` sudah tercantum di `.gitignore`.

## Menjalankan Test
 
### Semua Test (dari root)
 
```bash
bun run test
```
 
### Backend Unit Test
 
```bash
cd apps/api
bun run test
```
 
### Backend E2E Test
 
```bash
cd apps/api
bun run test:e2e
```
 
### Frontend Test
 
```bash
cd apps/web
bun run test
```
 
### Cek Coverage
 
```bash
cd apps/api
bun run test:cov
```
 
## Scripts Tersedia
 
Dari **root direktori**:
 
| Perintah | Deskripsi |
|---|---|
| `bun run dev` | Jalankan semua apps dalam mode development |
| `bun run build` | Build semua apps untuk production |
| `bun run test` | Jalankan semua test |
| `bun run lint` | Lint seluruh codebase |
 
 
## Kontribusi
 
1. Fork repositori ini
2. Buat branch fitur baru: `git checkout -b feat/nama-fitur`
3. Commit perubahan: `git commit -m 'feat: tambah fitur X'`
4. Push ke branch: `git push origin feat/nama-fitur`
5. Buat Pull Request
