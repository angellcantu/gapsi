'use strict';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogs } from './catalogs.entity';
import { CatalogsController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';

@Module({
    imports: [ TypeOrmModule.forFeature([Catalogs]) ],
    controllers: [ CatalogsController ],
    providers: [ CatalogsService ],
    exports: [ CatalogsService ]
})
export class CatalogsModule { };