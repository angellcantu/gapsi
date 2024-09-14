'use strict';

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';
import { CreateProductDto, UpdateProductDto } from './products.dto';
import { IProductRepository } from './products.interface';

@Injectable()
export class ProductsService implements IProductRepository {

    constructor(
        @InjectRepository(Products)
        private readonly productRepository: Repository<Products>
    ) { }
    
    generateId(): string {
        let id: string = '';
        let random: string = '12345abcde';

        for (let i = 10; i > 0; i--) {
            id += random[Math.floor(Math.random() * 10)];
        }

        return id;
    }
    
    findAll(): Promise<Array<Products>> {
        return this.productRepository.find();
    }
    
    async findById(id: string): Promise<Products> {
        let product: Products = await this.productRepository.findOne({ where: { id: id } });
        if (!product) {
            throw new HttpException(`Product with identifier ${id} does not exist.`, HttpStatus.NOT_FOUND);
        }
        return product;
    }
    
    async create(product: CreateProductDto): Promise<Products> {
        try {
            product.id = this.generateId();
            let record: Products = this.productRepository.create(product);
            await this.productRepository.save(record);
            return record;
        } catch (error) {
            throw new HttpException(error.toString(), HttpStatus.CONFLICT);
        }
    }
    
    async update(id: string, product: UpdateProductDto): Promise<Products> {
        try {
            await this.findById(id);
            product.updated_at = new Date();
            await this.productRepository.update(id, product);
            return await this.findById(id);
        } catch (error) {
            throw new HttpException(error.toString(), HttpStatus.CONFLICT);
        }
    }

}