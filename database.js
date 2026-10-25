import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_USER_PASSWORD,
    database: 'chat_db',
    connectionLimit: 5
});