import { response } from '../helpers/response.js';
import { DB } from '../db/connection.js';

export const updateMahasiswaHandler = async (req, res) => {
  const {
    nama,
    umur,
    jurusan,
    angkatan,
  } = req.body;

  let { nim } = req.params;
  nim = Number(nim);

  const checkIdentity = !nama ? 'nama' : !umur ? 'umur' : !jurusan ? 'jurusan' : 'angkatan';

  if (!nama || !umur || !jurusan || !angkatan) {
    return response(400, 'fail', { message: `Gagal memperbarui mahasiswa. ${checkIdentity} belum di inputkan!` }, res);
  }

  const result = await DB.mahasiswa.updateOne({ nim }, {
    $set: {
      nama,
      umur,
      jurusan,
      angkatan,
    },
  });

  const { modifiedCount } = result;

  if (modifiedCount === 0) {
    return response(404, 'fail', { message: 'Gagal memperbarui mahasiswa. Nim tidak ditemukan' }, res);
  }

  return response(200, 'success', { message: 'Mahasiswa berhasil diperbarui' }, res);
};
