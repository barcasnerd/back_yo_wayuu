import fs from "fs";
import {connectToDb} from '../infrastructure/driven-adapters/typeorm/config/db.config';
import RemoveTempFile from '../common/helpers/tempDir'
import {Express} from "express";
import {startApp} from '../infrastructure/entry-points/express/setup/server';
import {APP_VARIABLES} from "../common/config/app-variables.config";


const dotenv = require('dotenv-yaml');
dotenv.config();

if (APP_VARIABLES.NODE_ENV !== 'production') {
    dotenv.config();
}
console.log(APP_VARIABLES.APP_PORT)

export async function start(preventListen: boolean = false) {
    await connectToDb();
    const expressApp = startApp(preventListen);    
    const path = `${__dirname}/../temp/`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }


    setInterval(RemoveTempFile, 3600000);
    return {
        express: expressApp
    }
}

start();
