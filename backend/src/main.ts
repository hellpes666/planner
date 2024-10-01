import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api'); //? add api к каждому запросу автоматом - http://localhost/api
	// app.use(cookieParser);
	//? CROS - Cross Origin Resource Sharing
	//? правильная настройка между сервером и клиентом
	app.enableCors({
		origin: ['http://localhost:3001'],
		credentials: true,
		exposedHeaders: 'set-cookie'
	});

	await app.listen(4200);
}

bootstrap();
