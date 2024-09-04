const dotenv = require('dotenv');
dotenv.config();
const Pool = require('pg').Pool;

const db = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.PGHOST||'bicholover.up.railway.app',
    port: process.env.PGPORT||3000,
    database: process.env.PGDATABASE||'MultiAgent',
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
    max: 20,
})

module.exports = {db};