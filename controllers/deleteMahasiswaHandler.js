import { response } from '../helpers/response.js';
import { DB } from '../db/connection.js';

const deleteMahasiswaHandler = async (req, res) => {
  let { nim } = req.params;
  nim = Number(nim);

  const result = await DB.mahasiswa.deleteOne({ nim });
  const { deletedCount } = result;

  if (deletedCount === 0) {
    return response(404, 'fail', { message: 'Gagal menghapus mahasiswa. Nim tidak ditemukan' }, res);
  }

  return response(200, 'success', { message: 'Mahasiswa berhasil dihapus' }, res);
};

export { deleteMahasiswaHandler };
