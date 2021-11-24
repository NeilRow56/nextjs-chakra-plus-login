import Head from 'next/head';
import Layout from '../components/Layout';

import { Text, Box } from '@chakra-ui/react';

export default function Home() {
	return (
		<Layout title="Home">
			<Box paddingStart="20" paddingTop="10">
				<Text fontSize="25px" fontWeight="bold">
					Home Page
				</Text>
			</Box>
		</Layout>
	);
}
