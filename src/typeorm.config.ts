import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'nest-socket.c1wyaau086bw.eu-central-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'Test123456',
  database: 'chat',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
