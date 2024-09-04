const dotenv = require('dotenv');
dotenv.config();
const Pool = require('pg').Pool;

const db = new Pool({
    connectionString: process.env.DATABASE_PUBLIC_URL
})

module.exports = {db};