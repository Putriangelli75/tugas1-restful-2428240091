const dataplansModel = require('../models/dataplansModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { operator } = req.query;
  res.json(dataplansModel.getAll(operator));
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = dataplansModel.getById(id);
  if (!data) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(data);
};

exports.create = (req, res, next) => {
  const { namaPaket, operator, kuotaGb, masaAktifHari, harga } = req.body;
  if (!namaPaket || !operator || !kuotaGb || !masaAktifHari || !harga) return next(errorHttp(400, 'Semua field wajib diisi'));

  const baru = dataplansModel.create({ namaPaket, operator, kuotaGb, masaAktifHari, harga });
  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const hasil = dataplansModel.update(id, req.body);
  if (!hasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(hasil);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = dataplansModel.remove(id);
  if (!berhasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.status(204).send();
};