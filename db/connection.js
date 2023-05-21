import { MongoClient } from 'mongodb';

// Create Instance of MongoClient for mongodb
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'universitas';
const collectionName = 'mahasiswa';

const connectDB = async () => {
  try {
    await client.connect();
    console.log('koneksi mongodb berhasil');
  } catch (err) {
    console.log(err);
  }
};

const DB = {
  mahasiswa: client.db(dbName).collection(collectionName),
};

export { connectDB, DB };
