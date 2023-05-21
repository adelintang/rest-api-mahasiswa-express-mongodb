const filteredMahasiswa = (value) => value.reduce((acc, curr) => {
  acc.push({ nim: curr.nim, nama: curr.nama, jurusan: curr.jurusan });
  return acc;
}, []);

export { filteredMahasiswa };
