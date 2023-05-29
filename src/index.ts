import express from "express";
import helmet from "helmet";
import cors from "cors";
import { ConnectionOptions, createConnection } from "typeorm";
import dotenv from "dotenv";
import { AuthController } from "./controllers/auth.controller";
import { UserController } from "./controllers/user.controller";
import { join } from 'path';
import { getAllUsers } from "./use-cases/user.use-case";
import { generateDefaultData } from "./utils/global.util";

dotenv.config();

const TYPEORM_CONFIG: ConnectionOptions = {
    type: "postgres",
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT + ""),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [join(__dirname, '**', '*.model.{ts,js}')]
};

console.debug(TYPEORM_CONFIG);

createConnection(TYPEORM_CONFIG).then(async () => {

    // generate default data
    const users = await getAllUsers();
    if (users.length == 0) {
        console.debug("[Running DefaultData]");
        await generateDefaultData();
    } else {
        console.debug("[Skipping DefaultData]");
    }

    const app = express();

    // Agregar middleware Helmet
    app.use(helmet());

    // Agregar middleware CORS
    app.use(cors({
        origin: '*'
    }));

    // Agregar middleware de body-parser
    app.use(express.json());

    app.use("/auth", AuthController);
    app.use("/user", UserController);

    app.listen(3000, "0.0.0.0", () => {
        console.log("Server running on port 3000");
    });
});
