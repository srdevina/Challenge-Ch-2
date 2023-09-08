// Array of objects yang berisi data penjualan sepatu
const dataPenjualanPakAldi = [
  {
    namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan : 760000,
    kategori : "Sepatu Sport",
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan : 960000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 37,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Maroon High',
    hargaSatuan : 360000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan : 120000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  let totalPenjualan = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    totalPenjualan += dataPenjualan[i].totalTerjual;
  }

  return totalPenjualan;
}

const totalPenjualan = hitungTotalPenjualan(dataPenjualanPakAldi);

console.log('Total sepatu yang terjual: ' + totalPenjualan);
