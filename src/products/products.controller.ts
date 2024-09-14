'use strict';

import { Controller, Get, Param, Body, Put, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
    findAll() {
        return this.products.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.products.findById(id);
    }

    @Post()
    async create(@Body() product: CreateProductDto) {
        let catalogs = await this.catalog.findById(product.catalog_id);
        delete product.catalog_id;
        product.catalogs = catalogs;
        return this.products.create(product);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() product: UpdateProductDto) {
        return this.products.update(id, product);
    }

}