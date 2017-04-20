var faker = require('faker');
var firebase = require('firebase');

const config = {
    apiKey: "AIzaSyA_5CByNyUPhGk21QygPW4ffVDS6pOcPBc",
    authDomain: "goodeats-f4106.{firebaseApp}.com",
    databaseURL: "https://goodeats-f4106.firebaseio.com",
    storageBucket: "goodeats-f4106.appspot.com",
    messagingSenderId: "140477967686"
}

const firebaseApp = firebase.initializeApp(config);
const goodeatsRef = firebase.database().ref('resturants');

const restaurants = [];



for(let i = 0; i < 20; i++){
    const restaurant = {
    name: faker.company.companyName(),
    location: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode()
    },
        phone: faker.phone.phoneNumberFormat(),
        rating: faker.random.number({min:1, max:5}),
    menu: [
    {
        dish: faker.lorem.words(3),
        price: faker.random.number(15, 55),
        description: faker.commerce.productAdjective() + faker.lorem.words(10)
    },
    {
        dish: faker.lorem.words(3),
        price: faker.random.number(15, 55),
        description: faker.commerce.productAdjective() + faker.lorem.words(10)
    },
    {
        dish: faker.lorem.words(3),
        price: faker.random.number(15, 55),
        description: faker.commerce.productAdjective() + faker.lorem.words(10)
    },
    {
        dish: faker.lorem.words(3),
        price: faker.random.number(15, 55),
        description: faker.commerce.productAdjective() + faker.lorem.words(10)
    },
    {
        dish: faker.lorem.words(3),
        price: faker.random.number(15, 55),
        description: faker.commerce.productAdjective() + faker.lorem.words(10)
    },
    {
        dish: faker.lorem.words(3),
        price: faker.random.number(15, 55),
        description: faker.commerce.productAdjective() + faker.lorem.words(10)
    },
    {
        dish: faker.lorem.words(3),
        price: faker.random.number(15, 55),
        description: faker.commerce.productAdjective() + faker.lorem.words(10)
    }
    ]
}
    restaurants.push(restaurant);
}
goodeatsRef.set(restaurants);
console.log('good to go');

//put back in db {auth != null}

["Italian", "Pizza", "American", "Burger", "Spanish", "Vegan"]