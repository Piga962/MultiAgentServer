const jsonModel = require('../models/jsonModel');

async function createJson(req, res){
    const json = req.body;
    try{
        const response = await jsonModel.createJson(json);
        res.status(201).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

async function getJson(req, res){
    try{
        const response = await jsonModel.getJson();
        res.status(200).json(response);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {createJson, getJson};