'use strict';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ProductsModule } from './products/products.module';
import { join } from 'path';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: join(__dirname, '../.env')
		}),
		DatabaseModule,
		CatalogsModule,
		ProductsModule
	]
})
export class AppModule { }
