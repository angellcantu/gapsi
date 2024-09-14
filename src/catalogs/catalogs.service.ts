'use strict';

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalogs } from './catalogs.entity';
import { CreateCatalogDto, UpdateCatalogDto } from './catalogs.dto';
import { ICatalogsRepository } from './catalogs.interface';

@Injectable()
export class CatalogsService implements ICatalogsRepository {

    constructor(
        @InjectRepository(Catalogs)
        private readonly catalogsRepository: Repository<Catalogs>
    ) { }
    
    findAll(): Promise<Array<Catalogs>> {
        return this.catalogsRepository.find();
    }
    
    async findById(id: number): Promise<Catalogs> {
        let catalog: Catalogs = await this.catalogsRepository.findOne({ where: { id: id } });
        if (!catalog) {
            throw new HttpException(`Catalog with identifier ${id} does not exist.`, HttpStatus.NOT_FOUND);
        }
        return catalog;
    }
    
    async create(catalog: CreateCatalogDto): Promise<Catalogs> {
        try {
            let record = this.catalogsRepository.create(catalog);
            await this.catalogsRepository.save(record);
            return record;
        } catch (error) {
            throw new HttpException(error.toString(), HttpStatus.CONFLICT);
        }
    }
    
    async update(id: number, catalog: UpdateCatalogDto): Promise<Catalogs> {
        try {
            await this.findById(id);
            catalog.updated_at = new Date();
            await this.catalogsRepository.update(id, catalog);
            return await this.findById(id);
        } catch (error) {
            throw new HttpException(error.toString(), HttpStatus.CONFLICT);
        }
    }

}