// Array of objects yang berisi data penjualan buku novel
const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let novelTerlaris = '';
  let penulisTerlaris = '';
  let jumlahTerlaris = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    const novel = dataPenjualan[i];
    const keuntungan = (novel.hargaJual - novel.hargaBeli) * novel.totalTerjual;
    
    totalKeuntungan += keuntungan;
    totalModal += novel.hargaBeli * novel.totalTerjual;

    if (novel.totalTerjual > jumlahTerlaris) {
      novelTerlaris = novel.namaProduk;
      penulisTerlaris = novel.penulis;
      jumlahTerlaris = novel.totalTerjual;
    }
  }

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    totalKeuntungan,
    totalModal,
    novelTerlaris,
    penulisTerlaris,
    persentaseKeuntungan,
  };
}

const informasi = getInfoPenjualan(dataPenjualanNovel);

console.log('Total Keuntungan: Rp' + informasi.totalKeuntungan);
console.log('Total Modal: Rp' + informasi.totalModal);
console.log('Persentase Keuntungan: ' + informasi.persentaseKeuntungan.toFixed(2) + '%');
console.log('Produk Buku Terlaris: ' + informasi.novelTerlaris);
console.log('Penulis Buku Terlaris: ' + informasi.penulisTerlaris);

