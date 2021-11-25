import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			firstName: 'John',
			lastName: 'Doe',
			email: 'admin@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
		{
			firstName: 'Jane',
			lastName: 'Doe',
			email: 'admin1@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
	],
};

export default data;
