const mongoose = require('mongoose');

const alamatSchema = new mongoose.Schema({
  kodePos: String,
  kota: String,
}, { _id: false });

const dataplansSchema = new mongoose.Schema({
  namaPaket: { type: String, required: [true, 'nama paket wajib diisi'], trim: true },
  operator: { type: String, required: [true, 'operator wajib diisi'], trim: true },
  kuotaGb: { type: Number, required: [true, 'kuota GB wajib diisi'], min: 0 },
  masaAktifHari: { type: Number, required: [true, 'masa aktif hari wajib diisi'], min: 0 },
  harga: { type: Number, required: [true, 'harga wajib diisi'], unique: true, min: 0 },
  alamat: alamatSchema,
  cabangId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cabang' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Dataplans', dataplansSchema);