Nama : Putri Angel Li
NPM : 2428240091
Nomor Topik : 25
Cara menjalankan lokal :
Daftar endpoint :
| No | Method | Endpoint | Data request | Status diharapkan | Status hasil | Keterangan |
|---:|---|---|---|---:|---:|---|
| 1 | GET | `/{data-plans}` | — | 200 | 200 | Sesuai |
| 2 | GET | `/{resource}/1` | — | 200 | … | … |
| 3 | GET | `/{resource}/99` | — | 404 | … | … |
| 4 | GET | `/{resource}?{filter}=nilai` | — | 200 | … | … |
| 5 | POST | `/{resource}` | body lengkap | 201 | … | … |
| 6 | POST | `/{resource}` | field wajib kosong | 400 | … | … |
| 7 | PUT | `/{resource}/1` | body lengkap | 200 | … | … |
| 8 | PUT | `/{resource}/99` | body lengkap | 404 | … | … |
| 9 | DELETE | `/{resource}/1` | — | 200 | … | … |
| 10 | DELETE | `/{resource}/99` | — | 404 | … | … |


Link repository github :
Link deploy vercel :