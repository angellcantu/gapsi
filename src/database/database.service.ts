'use strict';

import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
    
    constructor(private readonly config: ConfigService) { }
    
    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'mssql',
            host: this.config.get<string>('DB_SERVER'),
            port: +this.config.get<number>('DB_PORT'),
            username: this.config.get<string>('DB_USER'),
            password: this.config.get<string>('DB_PASSWORD'),
            database: this.config.get<string>('DB_NAME'),
            options: {
                encrypt: false
            },
            synchronize: this.config.get<string>('NODE_ENV') == 'development' ? true : false,
            logging: false,
            autoLoadEntities: true
        };
    }

}