const { Client } = require('pg');
const faker = require('faker');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'my_zoo',
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

async function insertAnimalTemplates() {
    for (let i = 0; i < 50; i++) {
        const name = faker.animal.type();
        const species = faker.animal.species();

        const query = `
            INSERT INTO animal_template (name, species)
            VALUES ($1, $2);
        `;
        const values = [name, species];

        try {
            await client.query(query, values);
            console.log(`Inserted animal template ${i + 1}`);
        } catch (err) {
            console.error('Error inserting animal template:', err.stack);
        }
    }
}

async function insertAnimals() {
    const statuses = ['available', 'unavailable'];
    const sexes = ['male', 'female'];

    for (let i = 0; i < 50; i++) {
        const id_animal_template = Math.floor(Math.random() * 50) + 1;
        const sex = sexes[Math.floor(Math.random() * sexes.length)];
        const origin = faker.address.country();
        const price = parseFloat(faker.commerce.price());
        const rent = parseFloat(faker.commerce.price());
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const color = faker.commerce.color();

        const query = `
            INSERT INTO animal (id_animal_template, sex, origin, price, rent, status, color)
            VALUES ($1, $2, $3, $4, $5, $6, $7);
        `;
        const values = [id_animal_template, sex, origin, price, rent, status, color];

        try {
            await client.query(query, values);
            console.log(`Inserted animal ${i + 1}`);
        } catch (err) {
            console.error('Error inserting animal:', err.stack);
        }
    }
}

async function insertEvents() {
    for (let i = 0; i < 50; i++) {
        const id_animal = Math.floor(Math.random() * 50) + 1;
        const image = faker.image.imageUrl();
        const situation_date = faker.date.past();

        const query = `
            INSERT INTO event (id_animal, image, situation_date)
            VALUES ($1, $2, $3);
        `;
        const values = [id_animal, image, situation_date];

        try {
            await client.query(query, values);
            console.log(`Inserted event ${i + 1}`);
        } catch (err) {
            console.error('Error inserting event:', err.stack);
        }
    }
}

async function insertReviews() {
    for (let i = 0; i < 50; i++) {
        const author = faker.name.findName();
        const id_animal = Math.floor(Math.random() * 50) + 1;
        const rating = Math.floor(Math.random() * 5) + 1;
        const comment = faker.lorem.sentence();
        const status = ['available', 'unavailable'][Math.floor(Math.random() * 2)];

        const query = `
            INSERT INTO review (author, id_animal, rating, comment, status)
            VALUES ($1, $2, $3, $4, $5);
        `;
        const values = [author, id_animal, rating, comment, status];

        try {
            await client.query(query, values);
            console.log(`Inserted review ${i + 1}`);
        } catch (err) {
            console.error('Error inserting review:', err.stack);
        }
    }
}

async function insertClients() {
    for (let i = 0; i < 50; i++) {
        const client_name = faker.name.findName();
        const phone_number = faker.phone.phoneNumber();
        const email = faker.internet.email();

        const query = `
            INSERT INTO client (client_name, phone_number, email)
            VALUES ($1, $2, $3);
        `;
        const values = [client_name, phone_number, email];

        try {
            await client.query(query, values);
            console.log(`Inserted client ${i + 1}`);
        } catch (err) {
            console.error('Error inserting client:', err.stack);
        }
    }
}

async function insertOrders() {
    const statuses = ['append', 'available', 'unavailable'];

    for (let i = 0; i < 50; i++) {
        const order_date = faker.date.past();
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const quantity = Math.floor(Math.random() * 10) + 1;
        const id_client = Math.floor(Math.random() * 50) + 1;
        const id_animal = Math.floor(Math.random() * 50) + 1;

        const query = `
            INSERT INTO orders (order_date, status, quantity, id_client, id_animal)
            VALUES ($1, $2, $3, $4, $5);
        `;
        const values = [order_date, status, quantity, id_client, id_animal];

        try {
            await client.query(query, values);
            console.log(`Inserted order ${i + 1}`);
        } catch (err) {
            console.error('Error inserting order:', err.stack);
        }
    }
}

async function insertOperations() {
    const operation_types = ['purchase', 'rental'];

    for (let i = 0; i < 50; i++) {
        const price = parseFloat(faker.commerce.price());
        const id_animal = Math.floor(Math.random() * 50) + 1;
        const operation_date = faker.date.past();
        const operation_type = operation_types[Math.floor(Math.random() * operation_types.length)];

        const query = `
            INSERT INTO operation (price, id_animal, operation_date, operation_type)
            VALUES ($1, $2, $3, $4);
        `;
        const values = [price, id_animal, operation_date, operation_type];

        try {
            await client.query(query, values);
            console.log(`Inserted operation ${i + 1}`);
        } catch (err) {
            console.error('Error inserting operation:', err.stack);
        }
    }
}

async function insertData() {
    await insertAnimalTemplates();
    await insertAnimals();
    await insertEvents();
    await insertReviews();
    await insertClients();
    await insertOrders();
    await insertOperations();
    client.end();
}

insertData()
    .catch(err => console.error('Error during data insertion:', err.stack));
