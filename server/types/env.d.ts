declare namespace NodeJS {
  interface ProcessEnv {
    readonly DB_URL: string;
    readonly JWT_ACCESS_KEY: string;
    readonly JWT_REFRESH_KEY: string;
  }
}
