'use strict';

import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Catalogs } from '../catalogs/catalogs.entity';

@Entity({ name: 'products' })
export class Products {

    @PrimaryColumn({ name: 'id', type: 'nvarchar', length: 10, nullable: false, unique: true })
    id: string;

    @ApiProperty({ example: 'T-shirt', description: `Product's name` })
    @Column({ name: 'name', type: 'nvarchar', length: 20, nullable: false, unique: true })
    name: string;

    @ApiProperty({ example: 'Description of the product', description: `Product's description` })
    @Column({ name: 'description', type: 'nvarchar', length: 200, nullable: true })
    description: string;

    @ApiProperty({ example: 10.00, description: 'Price of the product' })
    @Column({ name: 'price', type: 'float', nullable: false })
    price: number;

    @ApiProperty({ example: '2555XSX27', description: 'Model of the product' })
    @Column({ name: 'model', type: 'nvarchar', nullable: false })
    model: string;

    @ApiProperty({ example: false, description: 'Active or deactive a product' })
    @Column({ name: 'active', type: 'bit', nullable: false, default: true })
    active: boolean;

    @Column({ name: 'created_at', type: 'datetime', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ name: 'updated_at', type: 'datetime', nullable: true })
    updated_at: Date;

    @ManyToOne(() => Catalogs, catalog => catalog.id)
    @JoinColumn()
    catalogs: Catalogs;

}