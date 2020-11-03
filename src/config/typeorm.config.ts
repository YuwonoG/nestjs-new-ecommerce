import {TypeOrmModuleOptions} from "@nestjs/typeorm";

//synchronize true is not recommended in production. 
//Everythime the connection starts, it will synch up with the schema in Postgres database
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password : 'viewsonic',
    database : 'ecomm',
    entities : [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize : true, 
    logging : true,
};