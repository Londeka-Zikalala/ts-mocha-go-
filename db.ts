import pgPromise from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

const pgp = pgPromise();

// should we use a SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
// which db connection to use
const connectionString: string = process.env.DATABASE_URL || '';

if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not defined.");
}

const db = pgp(connectionString);
db.connect();

export default db;
