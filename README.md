Nama : Putri Angel Li
NPM : 2428240091
Nomor Topik : 25

Cara menjalankan lokal : 
1. Buka command prompt, kemudian ketik D:
2. Lalu ketik mkdir tugas1-restful-2428240091, kemudian cd tugas1-restful-2428240091
3. Kemudian ketik npm init -y dan npm install express
4. Buka folder tugas1-restful-2428240091 di visual studio code
5. Kemudian buka terminal dan ketik npm install --save-dev nodemon
6. Tambahkan pada packages.json :
   "scripts": {
   "start": "node app.js",
  "dev": "nodemon app.js"
}
8. Jalankan npm run dev


Daftar endpoint :
| No | Method | Endpoint | Data request | Status diharapkan | Status hasil | Keterangan |
|---:|---|---|---|---:|---:|---|
| 1 | GET | `/data-plans` | — | 200 | 200 | Sesuai |
| 2 | GET | `/data-plans/1` | — | 200 | … | … |
| 3 | GET | `/data-plans/99` | — | 404 | … | … |
| 4 | GET | `/data-plans?operator=nilai` | — | 200 | … | … |
| 5 | POST | `/data-plans` | body lengkap | 201 | … | … |
| 6 | POST | `/data-plans` | field wajib kosong | 400 | … | … |
| 7 | PUT | `/data-plans/1` | body lengkap | 200 | … | … |
| 8 | PUT | `/data-plans/99` | body lengkap | 404 | … | … |
| 9 | DELETE | `/data-plans/1` | — | 200 | … | … |
| 10 | DELETE | `/data-plans/99` | — | 404 | … | … |


Link repository github :
Link deploy vercel : https://tugas1-restful-2428240091.vercel.app/
