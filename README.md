Nama : Putri Angel Li

NPM : 2428240091

Kelas : SI5B

Nama Topik : Telekomunnikasi

Nomor Topik : 25

Link repository github : https://github.com/Putriangelli75/tugas1-restful-2428240091

Link deploy vercel : https://tugas1-restful-2428240091.vercel.app/

Cara menjalankan lokal : 
1. Buka command prompt, kemudian ketik D:
2. Lalu ketik mkdir tugas1-restful-2428240091, kemudian cd tugas1-restful-2428240091
3. Kemudian ketik npm init -y dan npm install express
4. Buka folder tugas1-restful-2428240091 di visual studio code
5. Kemudian buka terminal dan ketik npm install --save-dev nodemon
6. Ubah main pada packages.json menjadi app.js dan buat file baru dengan nama app.js
7. Tambahkan pada packages.json :
   "scripts": {
   "start": "node app.js",
  "dev": "nodemon app.js"
}
8. Jalankan npm run dev
9. Buka http://localhost:3000

Daftar endpoint :
| No | Method | Endpoint | Data request | Status diharapkan | Status hasil | Keterangan |
|---:|---|---|---|---:|---:|---|
| 1 | GET | `/data-plans` | — | 200 | 200 | Sesuai |
| 2 | GET | `/data-plans/1` | — | 200 | 200 | Sesuai |
| 3 | GET | `/data-plans/99` | — | 404 | 404 | Sesuai |
| 4 | GET | `/data-plans?operator=Telkomsel` | — | 200 | 200 | Sesuai |
| 5 | POST | `/data-plans` | body lengkap | 201 | 201 | Sesuai |
| 6 | POST | `/data-plans` | field wajib kosong | 400 | 400 | Sesuai |
| 7 | PUT | `/data-plans/1` | body lengkap | 200 | 200 | Sesuai |
| 8 | PUT | `/data-plans/99` | body lengkap | 404 | 404 | Sesuai |
| 9 | DELETE | `/data-plans/1` | — | 200 | 200 | Sesuai |
| 10 | DELETE | `/data-plans/99` | — | 404 | 404 | Sesuai |

Field dan Tipe Data :
| Field           | Tipe Data | Wajib |
| --------------- | --------- | ----- |
| `namaPaket`     | string    | *     |
| `operator`      | string    | *     |
| `kuotaGb`       | number    | *     |
| `masaAktifHari` | number    | *     |
| `harga`         | number    | *     |



