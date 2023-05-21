import { response } from '../helpers/response.js';
import { DB } from '../db/connection.js';

const getSpecifiedMahasiswaHandler = async (req, res) => {
  let { nim } = req.params;
  nim = Number(nim);

  const mahasiswa = await DB.mahasiswa.findOne({ nim });

  if (!mahasiswa) {
    return response(404, 'fail', { message: 'mahasiswa tidak ditemukan' }, res);
  }

  return response(200, 'success', { data: { mahasiswa } }, res);
};

export { getSpecifiedMahasiswaHandler };
