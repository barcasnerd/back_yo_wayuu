const validateEnvironmentVariable = (variable: string): string => {
    if (!process.env[variable]) {
        console.error(`Environment variable ${variable} is required`);
        process.exit(1);
    }
    return process.env[variable]!;
}

export const APP_VARIABLES = {
    //DATABASE CONFIG
    DB_HOST: validateEnvironmentVariable('DB_HOST'),
    DB_USERNAME: validateEnvironmentVariable('DB_USERNAME'),
    DB_PASSWORD: validateEnvironmentVariable('DB_PASSWORD'),
    DB_NAME: validateEnvironmentVariable('DB_NAME'),
    DB_PORT: validateEnvironmentVariable('DB_PORT'),
    TEST_DB_NAME: validateEnvironmentVariable('TEST_DB_NAME'),

    //KEYCLOAK ADMIN API
    KEYCLOAK_ADMIN_REALM: validateEnvironmentVariable('KEYCLOAK_ADMIN_REALM'),
    KEYCLOAK_ADMIN_CLIENT_SECRET: validateEnvironmentVariable('KEYCLOAK_ADMIN_CLIENT_SECRET'),
    KEYCLOAK_ADMIN_CODE_GENERATION_SECRET: validateEnvironmentVariable('KEYCLOAK_ADMIN_CODE_GENERATION_SECRET'),
    KEYCLOAK_ADMIN_CLIENT_ID: validateEnvironmentVariable('KEYCLOAK_ADMIN_CLIENT_ID'),
    KEYCLOAK_ADMIN_BASE_URL: validateEnvironmentVariable('KEYCLOAK_ADMIN_BASE_URL'),
    API_URL: validateEnvironmentVariable('API_URL'),

    //S3
    S3_ENDPOINT: validateEnvironmentVariable('S3_ENDPOINT'),
    S3_ACCESSKEY: validateEnvironmentVariable('S3_ACCESSKEY'),
    S3_SECRETKEY: validateEnvironmentVariable('S3_SECRETKEY'),
    //OTHERS
    APP_PORT: validateEnvironmentVariable('APP_PORT'),
    NODE_ENV: validateEnvironmentVariable('NODE_ENV'),
    SKIP_STARTUP_VALIDATIONS: validateEnvironmentVariable("SKIP_STARTUP_VALIDATIONS"),
    SERVER_URL_GENERAL_SERVICES: validateEnvironmentVariable("SERVER_URL_GENERAL_SERVICES")

}
