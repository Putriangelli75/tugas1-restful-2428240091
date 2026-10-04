Nama : Putri Angel Li
NPM : 2428240091
Nomor Topik : 25
Cara menjalankan lokal :
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
Link deploy vercel :