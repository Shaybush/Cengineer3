export class AppConfig {
	static readonly port = process.env.PORT ?? 3000;

	static readonly apiUrl = {
		health: '/health',
		users: '/users',
		rooms: '/rooms',
		messages: '/messages',
	};
}
