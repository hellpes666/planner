import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private configService: ConfigService,
		private UserService: UserService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //? Where we get Bearer JWT
			ignoreExpirations: true, //? Окончания игнорируем
			secretOrKey: configService.get('JWT_SECRET')
		});
	}

	async validate({ id }: { id: string }) {
        //? Берём полностью нашего Пользователя 
		return this.UserService.getById(id);
	}
}
