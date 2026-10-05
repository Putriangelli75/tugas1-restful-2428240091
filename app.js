const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware agar req.body (JSON) dapat dibaca
app.use(express.json());

// Data sementara (disimpan di memori, hilang saat server restart)
let dataplans = [
	{ id: 1, namaPaket: 'Internet Bulanan 25GB', operator: 'Nusanet', kuotaGb: 25, masaAktifHari: 30, harga: 85000 },
	{ id: 2, namaPaket: 'Internet Bulanan 10GB', operator: 'Telkomsel', kuotaGb: 10, masaAktifHari: 30, harga: 50000 },
	{ id: 3, namaPaket: 'Internet Bulanan 5GB', operator: 'Axis', kuotaGb: 5, masaAktifHari: 30, harga: 30000 }
];
let nextId = 4;

// GET / -> memastikan server berjalan
app.get('/', (req, res) => {
	res.json({
		nama: "Putri Angel Li",
		nim: "2428240091",
		topik: 25,
		endpoints: [
			"GET /data-plans",
			"GET /data-plans/:id",
			"POST /data-plans",
			"PUT /data-plans/:id",
			"DELETE /data-plans/:id"
		]
	});
});

// GET /data-plans -> seluruh data, 
// bisa difilter: /data-plans?operator=Nusanet
app.get('/data-plans', (req, res) => {
	const { operator } = req.query;

	if (operator) {
		const hasil = dataplans.filter((d) => d.operator === operator);
		return res.json(hasil);
	}

	res.json(dataplans);
});

// GET /data-plans/1 -> satu data berdasarkan id
app.get('/data-plans/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const data = dataplans.find((d) => d.id === id);

	if (!data) return res.status(404).json({
		"status": "error",
		"message": `Data dengan id ${id} tidak ditemukan`,
		"data": null
	});
	res.json(data);
});

// POST /data-plans -> tambah data baru
// Body JSON: { "namaPaket": "Internet Bulanan 50GB", "operator": "Indosat", "kuotaGb": 50, "masaAktifHari": 30, "harga": 120000 }
app.post('/data-plans', (req, res) => {
	const { namaPaket, operator, kuotaGb, masaAktifHari, harga } = req.body;


	// validasi : field wajib kosong -> 400
	if (!namaPaket || !operator || !kuotaGb || !masaAktifHari || !harga) {
		return res.status(400).json({
			"status": "error",
			"message": 'namaPaket, operator, kuotaGb, masaAktifHari, dan harga wajib diisi',
			"data": null,
		});
	}

	const baru = { id: nextId++, namaPaket, operator, kuotaGb, masaAktifHari, harga };
	dataplans.push(baru);

	//berhasil -> 201 + data yang baru dibuat
	res.status(201).json({
		"status": "success",
		"message": "Data berhasil ditambahkan",
		"data": baru,
	});
});

// PUT /data-plans/4 -> ubah data
// Body JSON: { "namaPaket": "Internet Bulanan 100GB", "operator": "Smartfren", "kuotaGb": 50, "masaAktifHari": 30, "harga": 150000 }
app.put('/data-plans/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const index = dataplans.findIndex((d) => d.id === id);

	if (index === -1) {
		return res.status(404).json({
			"status": "error",
			"message": `Data dengan id ${id} tidak ditemukan`,
			"data": null
		});
	}

	dataplans[index] = { ...dataplans[index], ...req.body, id };

	res.status(200).json({
		status: "success",
		message: "Data berhasil diperbarui",
		data: dataplans[index]
	});
});

// DELETE /data-plans/4 -> hapus data
app.delete('/data-plans/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const index = dataplans.findIndex((d) => d.id === id);

	if (index === -1) {
		return res.status(404).json({
			"status": "error",
			"message": `Data dengan id ${id} tidak ditemukan`,
			"data": null
		});
	}

	dataplans.splice(index, 1);
	res.status(200).json({
		"status": "success",
		"message": `Data data-plans dengan id ${id} berhasil dihapus`,
		"data": null
	});
});

// Route yang tidak terdaftar
app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint tidak ditemukan"
    });
});

if (process.env.NODE_ENV !== 'production') {
	app.listen(PORT, () => {
		console.log(`Server berjalan di http://localhost:${PORT}`);
	});
}

module.exports = app;