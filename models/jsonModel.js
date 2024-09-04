const {db} = require('../database/db');

const createJson = async (json) => {
    try{
        const query = 'INSERT INTO jsonstorage (data) VALUES ($1) RETURNING *';
        const {rows} = await db.query(query, [json]);
        return rows;
    }catch(error){
        console.log(error);
        return error;
    }
}

const getJson = async () => {
    try{
        const query = 'SELECT data FROM jsonstorage ORDER BY createdat DESC LIMIT 1';
        const {rows} = await db.query(query);
        return rows;
    }catch(error){
        console.log('Error fetching JSON data',error);
        return error;
    }
}

module.exports = {createJson, getJson};