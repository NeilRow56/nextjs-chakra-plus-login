import { Heading, Text, Box, Stack } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Builder from '../components/FormBuilder';

export default function App() {
	return (
		<Layout title="Login">
			<Stack maxWidth="700px" margin="auto" spacing={5} marginTop={5}>
				<Heading as="h1">React-Hook-Form</Heading>
				<Text>Integrated with Chakra-UI ❤🔥</Text>
				<Builder />
			</Stack>
		</Layout>
	);
}
