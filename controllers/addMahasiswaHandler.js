import { response } from '../helpers/response.js';
import { randomNim } from '../helpers/randomNim.js';
import { DB } from '../db/connection.js';

const addMahasiswaHandler = async (req, res) => {
  const {
    nama,
    umur,
    jurusan,
    angkatan,
  } = req.body;

  const nim = randomNim();

  const checkIdentity = !nama ? 'nama' : !umur ? 'umur' : !jurusan ? 'jurusan' : 'angkatan';

  if (!nama || !umur || !jurusan || !angkatan) {
    return response(400, 'fail', { message: `Gagal menambahkan mahasiswa. ${checkIdentity} belum di inputkan!` }, res);
  }

  const result = await DB.mahasiswa.insertOne({
    nim,
    nama,
    umur,
    jurusan,
    angkatan,
  });

  const { insertedId } = result;

  if (!insertedId) {
    return response(500, 'fail', { message: 'Gagal menambahkan mahasiswa ke database!' }, res);
  }

  return response(201, 'success', { message: 'mahasiswa berhasil ditambahkan', data: { insertedId } }, res);
};

export { addMahasiswaHandler };
