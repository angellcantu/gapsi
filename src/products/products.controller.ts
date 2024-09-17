'use strict';

import { Controller, Get, Param, Body, Put, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CatalogsService } from '../catalogs/catalogs.service';
import { CreateProductDto, UpdateProductDto } from './products.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {

    constructor(
        private readonly products: ProductsService,
        private readonly catalog: CatalogsService
    ) { }

    @Get()
    @ApiOperation({ description: 'This service will return all the products.' })
    findAll() {
        return this.products.findAll();
    }

    @Get(':id')
    @ApiOperation({ description: 'This service will return the information of a single product.' })
    findById(@Param('id') id: string) {
        return this.products.findById(id);
    }

    @Post()
    @ApiOperation({ description: 'This service will create a new product sending the necessary information in the body.' })
    async create(@Body() product: CreateProductDto) {
        let catalogs = await this.catalog.findById(product.catalog_id);
        delete product.catalog_id;
        product.catalogs = catalogs;
        return this.products.create(product);
    }

    @Put(':id')
    @ApiOperation({ description: 'This service will update a single product sending the identifier by params option and the information in the body.' })
    update(@Param('id') id: string, @Body() product: UpdateProductDto) {
        return this.products.update(id, product);
    }

}