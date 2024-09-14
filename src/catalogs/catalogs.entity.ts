'use strict';

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Products } from '../products/products.entity';

@Entity({ name: 'catalogs' })
export class Catalogs {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'catalog name', description: `Catalog's name` })
    @Column({ name: 'name', type: 'nvarchar', length: 50 })
    name: string;

    @Column({ name: 'description', type: 'nvarchar', length: 200, nullable: true })
    description: string;

    @Column({ name: 'active', type: 'bit', default: true, nullable: false })
    active: boolean;

    @Column({ name: 'created_at', type: 'datetime', nullable: false, default: () => 'CURRENT_TIMESTAMP'  })
    created_at: Date;

    @Column({ name: 'updated_at', type: 'datetime', nullable: true })
    updated_at: Date;

    @OneToMany(() => Products, product => product.catalogs)
    @JoinColumn()
    products: Array<Products>;

}