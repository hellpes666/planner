import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getById(id: string) {
		//? Get unique User
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				//? Get user's tasks
				tasks: true
			}
		});
	}
}
