import {APP_VARIABLES} from "../../../../common/config/app-variables.config";

const dotenv = require('dotenv-yaml');
dotenv.config();

import {Connection, createConnection, getConnection, getConnectionManager} from 'typeorm';

let connection: Connection;
let db_name = APP_VARIABLES.DB_NAME;
if (APP_VARIABLES.NODE_ENV == 'test') {
    db_name = APP_VARIABLES.TEST_DB_NAME;
}

export async function connectToDb() {
    try {
        console.log("[currentConnections]: ", getConnectionManager().connections.map(el => {
            return {name: el.name, isConnected: el.isConnected}
        }));
        connection = await createConnection({
            type: "postgres",
            host: APP_VARIABLES.DB_HOST!,
            port: parseInt(APP_VARIABLES.DB_PORT + ""),
            username: APP_VARIABLES.DB_USERNAME,
            password: APP_VARIABLES.DB_PASSWORD,
            database: db_name,
            logging: ["error"],
            synchronize: true,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + "/../**/migration/**"],
        });
        console.log('DB Connection established');
    } catch (err) {
        console.log('DB Connection failed', err);
        throw err;
    }
}

export async function closeDbConnection() {
    try {
        if (connection) {
            await connection.close();
            console.log("[DB connection closed]");
        }
    } catch (error: any) {
        console.log("[DB connection could not be cosed]");
        throw error;
    }
}

export function getDbConnection(forceGet: boolean = false) {
    if (forceGet) {
        connection = getConnection();
    }
    return connection;
}
