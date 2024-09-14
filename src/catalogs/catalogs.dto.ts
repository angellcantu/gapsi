'use strict';

import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatalogDto {

    @IsOptional()
    id: number | null;

    @ApiProperty()
    @IsNotEmpty({ message: 'The `name` field cannot be empty.' })
    name: string;

    @ApiProperty()
    @IsOptional()
    description: string;

    @IsOptional()
    active: boolean;

}

export class UpdateCatalogDto {

    @IsOptional()
    id: number | null;

    @ApiProperty()
    @IsNotEmpty({ message: 'The `name` field cannot be empty.' })
    name: string;

    @ApiProperty()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsOptional()
    active: boolean;

    @IsOptional()
    updated_at?: Date;

}