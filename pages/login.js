import React from 'react';
import NextLink from 'next/link';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import {
	FormControl,
	FormHelperText,
	Flex,
	Link,
	List,
	ListItem,
	Stack,
	Box,
	Button,
	FormLabel,
	Heading,
	Input,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';
import { useForm } from 'react-hook-form';

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const router = useRouter();
	const { redirect } = router.query;
	const { state, dispatch } = useContext(Store);
	const { userInfo } = state;
	useEffect(() => {
		if (userInfo) {
			router.push('/');
		}
	}, []);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post('/api/users/login', {
				firstName,
				lastName,
				email,
				password,
			});
			dispatch({ type: 'USER_LOGIN', payload: data });
			Cookies.set('userInfo', JSON.stringify(data));
			router.push(redirect || '/');
		} catch (err) {
			alert(err.response.data ? err.response.data.message : err.message);
		}
	};

	return (
		<Layout title="Login">
			<Stack maxWidth="700px" margin="auto" spacing={5}>
				<Box maxWidth="500px" my={25}>
					<Heading>Login</Heading>
				</Box>
				<Box my={4} textAlign="left">
					<form onSubmit={submitHandler}>
						<FormControl>
							<FormLabel
								mt={5}
								htmlFor="firstname"
								id="firstName"
							>
								First Name
							</FormLabel>
							<Input
								type="text"
								id="firstName"
								placeholder="First name"
								{...register('firstName', {
									required: 'Please enter first name',
									minLength: 3,
									maxLength: 80,
								})}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel mt={5} htmlFor="lastName" id="lastName">
								Last Name
							</FormLabel>
							<Input
								type="text"
								id="lastName"
								placeholder="Last name"
								{...register('lastName', {
									required: 'Please enter Last name',
									minLength: 3,
									maxLength: 100,
								})}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel mt={5} htmlFor="email" id="email">
								Email
							</FormLabel>
							<Input
								type="email"
								id="email"
								placeholder="Email"
								{...register('email', {
									required:
										'Please enter your account email address',
									pattern:
										/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
								})}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel mt={5} htmlFor="password" id="password">
								Password
							</FormLabel>
							<Input
								type="password"
								id="password"
								placeholder="Password"
								{...register('password', {
									required: 'Please enter Password',
									minLength: {
										value: 6,
										message: 'Too short',
									},
								})}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>

						<Button
							width="full"
							mt={4}
							mb={4}
							type="submit"
							bg="prime.100"
						>
							Login
						</Button>
						<List>
							<ListItem>
								Don't have an account? &nbsp;
								<NextLink
									href={`/register?redirect=${
										redirect || '/'
									}`}
									passHref
								>
									<Link color="prime.100">Register</Link>
								</NextLink>
							</ListItem>
						</List>
					</form>
				</Box>
			</Stack>
		</Layout>
	);
}
