'use strict';

import { Controller, Get, Param, Body, Put, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogsService } from './catalogs.service';
import { CreateCatalogDto, UpdateCatalogDto } from './catalogs.dto';

@ApiTags('catalogs')
@Controller('catalogs')
export class CatalogsController {

    constructor(private readonly catalogs: CatalogsService) { }

    @Get()
    findAll() {
        return this.catalogs.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.catalogs.findById(id);
    }

    @Post()
    create(@Body() catalog: CreateCatalogDto) {
        return this.catalogs.create(catalog);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() catalog: UpdateCatalogDto) {
        return this.catalogs.update(id, catalog);
    }

}