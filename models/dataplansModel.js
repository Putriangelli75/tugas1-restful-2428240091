let dataplans = [
	{ id: 1, namaPaket: 'Internet Bulanan 25GB', operator: 'Nusanet', kuotaGb: 25, masaAktifHari: 30, harga: 85000 },
	{ id: 2, namaPaket: 'Internet Bulanan 10GB', operator: 'Telkomsel', kuotaGb: 10, masaAktifHari: 30, harga: 50000 },
	{ id: 3, namaPaket: 'Internet Bulanan 5GB', operator: 'Axis', kuotaGb: 5, masaAktifHari: 30, harga: 30000 }
];
let nextId = 4;

function getAll(operator) {
  if (operator) return dataplans.filter((p) => p.operator === operator);
  return dataplans;
}

function getById(id) {
  return dataplans.find((p) => p.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  dataplans.push(baru);
  return baru;
}

function update(id, data) {
  const index = dataplans.findIndex((p) => p.id === id);
  if (index === -1) return null;
  dataplans[index] = { ...dataplans[index], ...data, id };
  return dataplans[index];
}

function remove(id) {
  const index = dataplans.findIndex((p) => p.id === id);
  if (index === -1) return false;
  dataplans.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };