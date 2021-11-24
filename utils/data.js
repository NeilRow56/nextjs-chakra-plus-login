import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'John',
			email: 'admin@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
		{
			name: 'Jane',
			email: 'admin@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
	],
};

export default data;
