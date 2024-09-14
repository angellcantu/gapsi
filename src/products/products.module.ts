'use strict';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Catalogs } from '../catalogs/catalogs.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CatalogsService } from '../catalogs/catalogs.service';

@Module({
    imports: [ TypeOrmModule.forFeature([Products, Catalogs]) ],
    controllers: [ ProductsController ],
    providers: [ ProductsService, CatalogsService ],
    exports: [ ProductsService ]
})
export class ProductsModule { };