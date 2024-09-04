const dotenv = require('dotenv');
dotenv.config();
const Pool = require('pg').Pool;

const db = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST||'bicholover.up.railway.app',
    port: 3000,
    database: 'MultiAgents',
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = {db};