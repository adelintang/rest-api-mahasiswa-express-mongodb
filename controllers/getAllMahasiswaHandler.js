import { response } from '../helpers/response.js';
import { filteredMahasiswa } from '../helpers/filteredMahasiswa.js';
import { DB } from '../db/connection.js';

export const getAllMahasiswaHandler = async (req, res) => {
  const { angkatan, jurusan } = req.query;

  if (angkatan) {
    const result = await DB.mahasiswa.find({ angkatan: Number(angkatan) }).toArray();
    const mahasiswa = filteredMahasiswa(result);

    response(200, 'success', { data: { mahasiswa } }, res);
  } else if (jurusan) {
    const result = await DB.mahasiswa.find().toArray();
    const filter = result.filter((mhs) => jurusan.toLowerCase().split('').every((e) => mhs.jurusan.toLowerCase().includes(e)));
    const mahasiswa = filteredMahasiswa(filter);

    response(200, 'success', { data: { mahasiswa } }, res);
  } else {
    const result = await DB.mahasiswa.find().toArray();
    const mahasiswa = filteredMahasiswa(result);

    response(200, 'success', { data: { mahasiswa } }, res);
  }
};
