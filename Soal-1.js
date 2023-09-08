function changeWord(kalimat, kataLama, kataBaru) {
  const kata = kalimat.split(" ")
  const kalimatBaru = kata.map(function (kataSaatIni) {
    if (kataSaatIni === kataLama) {
      return kataBaru;
    } else {
      return kataSaatIni;
    }
  });

  const kalimatAkhir = kalimatBaru.join(" ");

  return kalimatAkhir;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kataLama1 = 'mencintai';
const kataBaru1 = 'membenci';

const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';
const kataLama2 = 'bromo';
const kataBaru2 = 'semeru';

const kalimatHasil1 = changeWord(kalimat1, kataLama1, kataBaru1);
const kalimatHasil2 = changeWord(kalimat2, kataLama2, kataBaru2);

console.log(kalimatHasil1);
console.log(kalimatHasil2);
