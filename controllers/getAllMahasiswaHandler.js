import { response } from '../helpers/response.js';
import { filteredMahasiswa } from '../helpers/filteredMahasiswa.js';
import { DB } from '../db/connection.js';

const getAllMahasiswaHandler = async (req, res) => {
  const result = await DB.mahasiswa.find().toArray();
  const mahasiswa = filteredMahasiswa(result);

  response(200, 'success', { data: { mahasiswa } }, res);
};

export { getAllMahasiswaHandler };
