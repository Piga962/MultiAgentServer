const jsonModel = require('../models/jsonModel');

// Crear un nuevo JSON
async function createJson(req, res) {
    const json = req.body;
    try {
        const response = await jsonModel.createJson(json);
        res.status(201).json(response);
    } catch (error) {
        console.log('Error in createJson Controller', error);
        res.status(500).json({ error: 'Error creating JSON' });
    }
}

// Obtener el último JSON
async function getJson(req, res) {
    try {
        const response = await jsonModel.getJson();
        res.status(200).json(response);
    } catch (error) {
        console.log('Error in getJson Controller', error);
        res.status(500).json({ error: 'Error fetching JSON' });
    }
}

module.exports = { createJson, getJson };
