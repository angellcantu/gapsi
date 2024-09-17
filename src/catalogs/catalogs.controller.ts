'use strict';

import { Controller, Get, Param, Body, Put, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CatalogsService } from './catalogs.service';
import { CreateCatalogDto, UpdateCatalogDto } from './catalogs.dto';

@ApiTags('catalogs')
@Controller('catalogs')
export class CatalogsController {

    constructor(private readonly catalogs: CatalogsService) { }

    @Get()
    @ApiOperation({ description: 'This service will return all the available catalogs.' })
    findAll() {
        return this.catalogs.findAll();
    }

    @Get(':id')
    @ApiOperation({ description: 'This service will return the information of single catalog.' })
    findById(@Param('id') id: number) {
        return this.catalogs.findById(id);
    }

    @Post()
    @ApiOperation({ description: 'This service will create a new catalog sending the information in the body.' })
    create(@Body() catalog: CreateCatalogDto) {
        return this.catalogs.create(catalog);
    }

    @Put(':id')
    @ApiOperation({ description: 'This service will update a single catalog sending the identifier by params option and the necessary information in the body.' })
    update(@Param('id') id: number, @Body() catalog: UpdateCatalogDto) {
        return this.catalogs.update(id, catalog);
    }

}