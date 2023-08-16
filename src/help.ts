console.log('These are the available commands:');
//order:  asc   или  deс
console.log(`
       npm run list: to view cars list\n
       npm run delete -- --delete=$carId: to delete a car by id\n
       npm run add: to add a new car\n
       npm run sort -- --sortParam=$price --order=$asc
`);

console.log("----------------------Example---------------------------")
console.log("Сортировка: npm run sort -- --sortParam=price --order=asc")
console.log("Добалвить: npm run add")
console.log("Удаление: npm run delete -- --deleteCar=64dd59efe74562b36a656b66")