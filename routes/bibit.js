const express = require('express')

const router = express.Router();


// Mockup data Bibit
let bibit = [
  { id: 1, nama: 'Bibit Padi', jenis: 'Ciherang' },
  { id: 2, nama: 'Bibit Jagung', jenis: 'Bisi 2' },
];

// Menampilkan daftar Bibit
router.get('/', (req, res) => {
  res.render('bibit/list', { bibit });
});

// Form tambah Bibit
router.get('/add', (req, res) => {
  res.render('bibit/add');
});

// Menambahkan Bibit
router.post('/add', (req, res) => {
  const { nama, jenis } = req.body;
  const newBibit = { id: bibit.length + 1, nama, jenis };
  bibit.push(newBibit);
  res.redirect('/bibit');
});

// Form edit Bibit
router.get('/edit/:id', (req, res) => {
  const data = bibit.find(b => b.id === parseInt(req.params.id));
  res.render('bibit/edit', { data });
});

// Mengedit Bibit
router.post('/edit/:id', (req, res) => {
  const { nama, jenis } = req.body;
  const index = bibit.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    bibit[index] = { id: parseInt(req.params.id), nama, jenis };
  }
  res.redirect('/bibit');
});

// Menghapus Bibit
router.get('/delete/:id', (req, res) => {
  bibit = bibit.filter(b => b.id !== parseInt(req.params.id));
  res.redirect('/bibit');
});

module.exports = router;