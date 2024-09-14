'use strict';

import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Catalogs } from '../catalogs/catalogs.entity';

export class CreateProductDto {

    @IsOptional()
    id: string | null;

    @ApiProperty()
    @IsNotEmpty({ message: 'The `catalog_id` cannot be empty.' })
    catalog_id: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'The `name` field cannot be empty.' })
    name: string;

    @ApiProperty()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'The `price` field cannot be empty.' })
    price: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'The `model` field cannot be empty.' })
    model: string;

    @IsOptional()
    catalogs?: Catalogs;

}

export class UpdateProductDto {

    @ApiProperty()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsOptional()
    active: boolean;

    @IsOptional()
    updated_at?: Date;

    @IsOptional()
    catalogs?: Catalogs;

}