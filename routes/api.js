import express from 'express';
import { addMahasiswaHandler } from '../controllers/addMahasiswaHandler.js';
import { getAllMahasiswaHandler } from '../controllers/getAllMahasiswaHandler.js';
import { getSpecifiedMahasiswaHandler } from '../controllers/getSpecifiedMahasiswaHandler.js';
import { updateMahasiswaHandler } from '../controllers/updateMahasiswaHandler.js';
import { deleteMahasiswaHandler } from '../controllers/deleteMahasiswaHandler.js';

const router = express.Router();

router.post('/mahasiswa', addMahasiswaHandler);

router.get('/mahasiswa', getAllMahasiswaHandler);

router.get('/mahasiswa/:nim', getSpecifiedMahasiswaHandler);

router.put('/mahasiswa/:nim', updateMahasiswaHandler);

router.delete('/mahasiswa/:nim', deleteMahasiswaHandler);

export { router };
