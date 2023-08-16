import yargs from 'yargs';
import axios from 'axios';
import dotenv from 'dotenv';
import promptSync from 'prompt-sync';

dotenv.config();

type Car = {
  _id: string;
  brand: string;
  name: string;
  yearOfManufacturing: string;
  price: string;
};

let argv = yargs.argv;
const prompt = promptSync();

console.log('Welcome to car brads app\n');
console.log('Form help enter: `npm run help`');
console.log('\n');

if ((argv as any).list) {
  axios.get<Car[]>(`${process.env.API_SERVER}/cars`).then((response) => {
    const cars = response.data;

    console.log(cars);
  });
}

if ((argv as any).deleteCar) {
  const carId = (argv as any).deleteCar;
  console.log('delete id:', carId);
  axios.delete(`${process.env.API_SERVER}/cars/${carId}`).then((response) => {
    const data = response.data;
    console.log(data);
    console.log('\n');
  });
}

if ((argv as any).addCar) {
  const brand = prompt('выведите бренд машина: \t');
  const name = prompt('выведите название машина: \t');
  const yearOfManufacturing = prompt('выведите год производства машина: \t');
  const price = prompt('выведите цена машина: \t');

  axios.post(`${process.env.API_SERVER}/cars`, { name, brand, yearOfManufacturing, price }).then((response) => {
    const data = response.data;
    console.log(data);
    console.log('\n');
  });
}

if ((argv as any).sortParam) {
   const sort = (argv as any).sortParam;
   const order = (argv as any).order || 'asc';
  console.log("-------argv---------", argv)
   axios.get(`${process.env.API_SERVER}/cars?sort=${sort}&order=${order}`).then((response) => {
    const data = response.data;
    console.log(data);
    console.log('\n');
  });
}
