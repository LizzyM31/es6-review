import{greeting, customer, pizzaMap, orderTime} from './tools.js';

console.log(greeting("Lizzy"));

const c = new customer("Lizzy");
console.log(c.reassure());

console.log("Map stuff:");
for(let [key, value] of pizzaMap) {
  console.log(`${key}: ${value}`);
}

orderTime().then(data => console.log(data));
