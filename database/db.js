const dotenv = require('dotenv');
dotenv.config();
const Pool = require('pg').Pool;

const db = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST||'bicholover.up.railway.app',
    port: 3000,
    database: 'MultiAgents',
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
    max: 20,
})

module.exports = {db};