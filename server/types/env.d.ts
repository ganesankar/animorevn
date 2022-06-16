declare namespace NodeJS {
  interface ProcessEnv {
    // Redis
    readonly REDIS_HOST: string;
    readonly REDIS_PORT: string;
    readonly REDIS_USERNAME: string;
    readonly REDIS_PASSWORD: string;

    // Jwt secret key
    readonly JWT_ACCESS_KEY: string;
    readonly JWT_REFRESH_KEY: string;

    // Database
    readonly DB_URL: string;

    // Other
    readonly PORT: string | undefined;
  }
}
