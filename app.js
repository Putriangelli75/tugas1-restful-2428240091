	const express = require('express');
	const app = express();
	const PORT = 3000;
	
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
	
	
	
	app.listen(PORT, () => {
	  console.log(`Server berjalan di http://localhost:${PORT}`);
	});