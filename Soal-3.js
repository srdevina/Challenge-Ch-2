function getAngkaTerbesarKedua(dev) {
  if (dev.length < 2) {
    return "Tidak ada angka terbesar kedua.";
  }

  const angkaTerbesarPertama = Math.max(...dev);
  const devTanpaTerbesarPertama = dev.filter(angka => angka !== angkaTerbesarPertama);

  const getAngkaTerbesarKedua = Math.max(...devTanpaTerbesarPertama);

  return getAngkaTerbesarKedua;
}

const dev = [9,4,7,7,4,3,2,2,8];
console.log(getAngkaTerbesarKedua(dev));
