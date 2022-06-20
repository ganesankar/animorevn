export type Environment = 'PRODUCTION' | 'DEVELOPMENT';

export interface Config {
  redis: {
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
  };
  jwt: {
    readonly accessKey: string;
    readonly refreshKey: string;
  };
  readonly port: number;
  readonly env: Environment;
}
