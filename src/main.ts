'use strict';

import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logger = new Logger('Main');

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	app.useGlobalPipes(new ValidationPipe());

	const config = new DocumentBuilder()
		.setTitle('GAPSI')
		.setDescription('API REST Test with NodeJS')
		.setVersion('2.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('documentation', app, document);

	await app.listen(process.env.PORT || 3000);

	logger.log(`Main service started on port: ${process.env.PORT || 3000}`);
}

bootstrap();