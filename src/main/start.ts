import fs from "fs";
import {connectToDb} from '../infrastructure/driven-adapters/typeorm/config/db.config';

import RemoveTempFile from '../common/helpers/tempDir'
import {startupValidations} from "../common/config/startup";
import {Express} from "express";
import {
    getConnectApiInstance,
    instantiateConnectApi,
    setupConnectApi
} from "./factories/connectors/keycloak.connect.api.factory";
import {startApp} from '../infrastructure/entry-points/express/setup/server';
import {APP_VARIABLES} from "../common/config/app-variables.config";
import {setupAdminApi} from "./factories/connectors/keycloak.admin.api.factory";


const dotenv = require('dotenv-yaml');
dotenv.config();

if (APP_VARIABLES.NODE_ENV !== 'production') {
    dotenv.config();
}
console.log(APP_VARIABLES.APP_PORT)

export async function start(preventListen: boolean = false) {
    await setupAdminApi();
    // needed because api will not start if instantiated after express
    await instantiateConnectApi(<Express><unknown>null);
    await connectToDb();
    const expressApp = startApp(preventListen);
    getConnectApiInstance().setExpressInstance(expressApp);
    await setupConnectApi();
    if (APP_VARIABLES.SKIP_STARTUP_VALIDATIONS !== 'true') {
        await startupValidations();
    }
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
