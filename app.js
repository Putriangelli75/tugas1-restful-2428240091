	const express = require('express');
	const app = express();
	const PORT = 3000;
	
	// Middleware agar req.body (JSON) dapat dibaca
	app.use(express.json());
	
	// Data sementara (disimpan di memori, hilang saat server restart)
	let dataplans = [
	  { id: 1, namaPaket: 'Internet Bulanan 25GB', operator: 'Nusanet', kuotaGb: 25, masaAktiifHari: 30, harga: 85000 },
	  { id: 2, namaPaket: 'Internet Bulanan 10GB', operator: 'Telkomsel', kuotaGb: 10, masaAktiifHari: 30, harga: 50000 },
	  { id: 3, namaPaket: 'Internet Bulanan 5GB', operator: 'Axis', kuotaGb: 5, masaAktiifHari: 30, harga: 30000 }
	];
	let nextId = 4;
	
	// GET / -> memastikan server berjalan
	app.get('/', (req, res) => {
	  res.send('Server Express.js berjalan!');
	});
	
	// GET /data-plans -> seluruh data, bisa difilter: /data-plans?operator=Nusanet
	app.get('/data-plans', (req, res) => {
	  const { operator } = req.query;
	
	  if (operator) {
	    const hasil = dataplans.filter((d) => d.operator === operator);
	    return res.json(hasil);
	  }
	
	  res.json(dataplans);
	});
	
	// GET /data-plans/:id -> satu data berdasarkan id
	app.get('/data-plans/:id', (req, res) => {
	  const id = parseInt(req.params.id);
	  const data = dataplans.find((d) => d.id === id);
	
	  if (!data) return res.status(404).json({ message: 'Data tidak ditemukan' });
	  res.json(data);
	});
	
	// POST /data-plans -> tambah data baru
	app.post('/data-plans', (req, res) => {
	  const { namaPaket, operator, kuotaGb, masaAktiifHari, harga } = req.body;
	
	  if (!namaPaket || !operator || !kuotaGb || !masaAktiifHari || !harga) {
	    return res.status(400).json({ message: 'nama dan jurusan wajib diisi' });
	  }
	
	  const baru = { id: nextId++, nama, jurusan };
	  mahasiswa.push(baru);
	  res.status(201).json(baru);
	});
	
	// PUT /mahasiswa/:id -> ubah data
	app.put('/mahasiswa/:id', (req, res) => {
	  const id = parseInt(req.params.id);
	  const index = mahasiswa.findIndex((m) => m.id === id);
	
	  if (index === -1) {
	    return res.status(404).json({ message: 'Data tidak ditemukan' });
	  }
	
	  mahasiswa[index] = { ...mahasiswa[index], ...req.body, id };
	  res.json(mahasiswa[index]);
	});
	
	// DELETE /mahasiswa/:id -> hapus data
	app.delete('/mahasiswa/:id', (req, res) => {
	  const id = parseInt(req.params.id);
	  const index = mahasiswa.findIndex((m) => m.id === id);
	
	  if (index === -1) {
	    return res.status(404).json({ message: 'Data tidak ditemukan' });
	  }
	
	  mahasiswa.splice(index, 1);
	  res.status(204).send();
	});
	
	app.listen(PORT, () => {
	  console.log(`Server berjalan di http://localhost:${PORT}`);
	});