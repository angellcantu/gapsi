'use strict';

import { Products } from './products.entity';
import { CreateProductDto, UpdateProductDto } from './products.dto';

export interface IProductRepository {

    findAll(): Promise<Array<Products>>;

    findById(id: string): Promise<Products>;

    create(product: CreateProductDto): Promise<Products>;

    update(id: string, product: UpdateProductDto): Promise<Products>;

    generateId(): string;

}