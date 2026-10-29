const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema({
  kodeOperator: {type: String, required: [true, 'Kode operator wajib diisi'], unique: true, trim: true},
  negara: {type: String, default: 'Indonesia'},
});

module.exports = mongoose.model('Operator', operatorSchema);