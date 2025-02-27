const { Client } = require('pg');
const { faker } = require('@faker-js/faker');
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'my_zoo',
});

async function insertOrders() {
    const statuses = ['append', 'available', 'unavailable'];
    
    const clientRes = await client.query('SELECT id FROM client');
    const animalRes = await client.query('SELECT id FROM animal');
    const clientIds = clientRes.rows.map(row => row.id);
    const animalIds = animalRes.rows.map(row => row.id);
    
    for (let i = 0; i < 30; i++) {
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
    
    for (let i = 0; i < 30; i++) {
        const author = faker.person.fullName();  
        const id_animal = animalIds[Math.floor(Math.random() * animalIds.length)];
        const rating = Math.floor(Math.random() * 5) + 1; 
        const comment = faker.lorem.sentence();
        
        const query = `
            INSERT INTO review (author, id_animal, rating, comment)
            VALUES ($1, $2, $3, $4);
        `;
        const values = [author, id_animal, rating, comment];
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
async function insertOperations() {
    try {
        const operationTypes = ['surgery', 'checkup', 'vaccination', 'dental', 'emergency'];
        const animalRes = await client.query('SELECT id FROM animal');
        const animalIds = animalRes.rows.map(row => row.id);

        for (let i = 0; i < 20; i++) {
            const price = parseFloat((Math.random() * 500).toFixed(2));
            const id_animal = animalIds[Math.floor(Math.random() * animalIds.length)];
            const operation_date = faker.date.past({ years: 2 }).toISOString().split('T')[0];
            const operation_type = operationTypes[Math.floor(Math.random() * operationTypes.length)];

            const query = `
                INSERT INTO operation (price, id_animal, operation_date, operation_type)
                VALUES ($1, $2, $3, $4);
            `;
            const values = [price, id_animal, operation_date, operation_type];
            
            await client.query(query, values);
            console.log(`Inserted operation ${i + 1}`);
        }
    } catch (err) {
        console.error('Error inserting operation:', err.stack);
    }
}

async function insertData() {
    try {
        await insertOperations();
        await insertReviews();
        await insertClients();
        await insertOrders();
    } catch (err) {
        console.error('Error during data insertion:', err.stack);
    }
}

async function main() {
    try {
        await client.connect();
        console.log('Connected to the database');
        await insertData();
    } catch (err) {
        console.error('Connection error:', err.stack);
    } finally {
        await client.end();
        console.log('Database connection closed');
    }
}

main();
