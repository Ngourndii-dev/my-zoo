const { Client } = require('pg');
const { faker } = require('@faker-js/faker');
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'my_zoo',
});

async function insertAnimalTemplates() {
    for (let i = 0; i < 50; i++) {
        const name = `${faker.animal.dog()}_${i}`;
        const species = "Canine";
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
    const templateRes = await client.query('SELECT id FROM animal_template');
    const templateIds = templateRes.rows.map(row => row.id);
    
    for (let i = 0; i < 50; i++) {
        const id_animal_template = templateIds[Math.floor(Math.random() * templateIds.length)];
        const sex = sexes[Math.floor(Math.random() * sexes.length)];
        const origin = faker.location.country();
        const price = parseFloat(faker.commerce.price());
        const rent = parseFloat(faker.commerce.price());
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const color = faker.color.human();
        
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

async function insertOrders() {
    const statuses = ['append', 'available', 'unavailable'];
    
    const clientRes = await client.query('SELECT id FROM client');
    const animalRes = await client.query('SELECT id FROM animal');
    const clientIds = clientRes.rows.map(row => row.id);
    const animalIds = animalRes.rows.map(row => row.id);
    
    for (let i = 0; i < 50; i++) {
        const order_date = faker.date.past();
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const quantity = Math.floor(Math.random() * 10) + 1;
        const id_client = clientIds[Math.floor(Math.random() * clientIds.length)];
        const id_animal = animalIds[Math.floor(Math.random() * animalIds.length)];
        
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


async function insertReviews() {
    const statuses = ['pending', 'available', 'unavailable'];
    const animalRes = await client.query('SELECT id FROM animal');
    const animalIds = animalRes.rows.map(row => row.id);
    
    for (let i = 0; i < 50; i++) {
        const author = faker.person.fullName();  
        const id_animal = animalIds[Math.floor(Math.random() * animalIds.length)];
        const rating = Math.floor(Math.random() * 5) + 1; 
        const comment = faker.lorem.sentence();
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        
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
        const client_name = faker.person.fullName(); 
        const phone_number = faker.phone.number(); 
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


async function insertData() {
    try {
        await insertAnimalTemplates();
        await insertAnimals();
        await insertReviews();
        await insertClients();
        await insertOrders();
        await insertOperations();
        await client.end();
    } catch (err) {
        console.error('Error during data insertion:', err.stack);
        await client.end();
    }
}

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack))
    .finally(() => insertData());