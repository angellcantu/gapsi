'use strict';

import { Catalogs } from './catalogs.entity';
import { CreateCatalogDto, UpdateCatalogDto } from './catalogs.dto';

export interface ICatalogsRepository {

    findAll(): Promise<Array<Catalogs>>;

    findById(id: number): Promise<Catalogs>;

    create(catalog: CreateCatalogDto): Promise<Catalogs>;

    update(id: number, catalog: UpdateCatalogDto): Promise<Catalogs>;

}