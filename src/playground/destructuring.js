// const person = {
//     name: 'Bün',
//     age: 12,
//     location: {
//         city: 'Ankara',
//         temp: 9
//     }
// };

// // Works like import
// const { name: firstName = 'Benji', age } = person;

// console.log(`${firstName} is ${age} btw haHAA`);

// const { temp: temperature, city } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} degree in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Philie', 'Penslv', '19242'];

// const [, city, state, ] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', `$2.00`, `$2.50`, `$2.75`];

const [itemName = 'Water', , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);