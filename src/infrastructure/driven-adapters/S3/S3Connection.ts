import {APP_VARIABLES} from "../../../common/config/app-variables.config";

const dotenv = require('dotenv-yaml');
dotenv.config();

import {Client} from "minio";
import {IS3ObjectAPI} from "@smartsoft/s3-object-connector/dist/definitions/api.definition";
import MinioRepositoryDriver from "@smartsoft/s3-object-connector/dist/adapters/minio.repository.driver";

const connectionOption = {
    endPoint: APP_VARIABLES.S3_ENDPOINT || 'si',
    accessKey: APP_VARIABLES.S3_ACCESSKEY || 'si',
    secretKey: APP_VARIABLES.S3_SECRETKEY || 'si'
}

export function S3Connection() {
    const minioClient = new Client(connectionOption);
    const s3ClientDriver: IS3ObjectAPI = new MinioRepositoryDriver(minioClient);
    return {
        s3ClientDriver
    }

}
