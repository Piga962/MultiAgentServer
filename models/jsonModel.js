const { db } = require('../database/db');

// Insertar JSON en la base de datos
const createJson = async (json) => {
    try {
        const query = 'INSERT INTO jsonstorage (data) VALUES ($1) RETURNING *';
        const { rows } = await db.query(query, [json]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error('Error inserting JSON');
    }
};

// Obtener el último JSON almacenado
const getJson = async () => {
    try {
        const query = 'SELECT data FROM jsonstorage ORDER BY createdat DESC LIMIT 1';
        const { rows } = await db.query(query);
        if (rows.length > 0) {
            // Extrae el contenido dentro de 'data' y lo devuelve directamente
            const jsonData = rows[0].data;
            return jsonData; // Devolvemos el JSON tal cual sin la clave 'data'
        }
        return {}; // Devuelve un objeto vacío si no hay resultados
    } catch (error) {
        console.log('Error fetching JSON data', error);
        throw new Error('Error fetching JSON');
    }
};
module.exports = { createJson, getJson };
