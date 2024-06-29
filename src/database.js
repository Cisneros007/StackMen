import { createPool } from "mysql2/promise";


const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'tecsup00',
    database: 'practica02DAMA'
});

export default pool;