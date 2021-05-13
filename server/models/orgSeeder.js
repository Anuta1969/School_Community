import mongoose from "mongoose";
import { connect, connection } from "mongoose";
import Organization  from './organization.js';

async function orgSeeder() {
  await connect('mongodb://localhost:27017/elbrus', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
  const organizations = [
    {
      name: "ООО 'Рога и копыта'",
      rate: 2,
      comment:'bla bla bla',
      vacansion: 'Full stack middle',
    },
    {
      name: "ООО 'Рога'",
      rate: 3,
      comment:'bla bla bla',
      vacansion: 'Full stack middle',
    },
    {
      name: "ООО 'Копыта'",
      rate: 4.5,
      comment:'bla bla bla',
      vacansion: 'Full stack middle',
    },
    {
      name: "ООО Кот в мешке",
      rate: 5,
      comment:'bla bla bla',
      vacansion: 'Full stack middle',
    },
    {
      name: "ЕПАЛМ",
      rate: 3,
      comment:'bla bla bla',
      vacansion: 'Full stack middle',
    }
  ];
  
  await Organization.insertMany(organizations);
  await connection.close();
}

orgSeeder();
