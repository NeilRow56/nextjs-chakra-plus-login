import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { Flex, Container } from '@chakra-ui/react';

export default function Layout({ title, keywords, description, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>

			<Header />
			<Container padding="10px" minHeight="87vh" maxW="100%">
				{children}
			</Container>
			<Footer />
		</>
	);
}

Layout.defaultProps = {
	title: 'Starter Template',
	description: 'modern coding',
	keywords: 'nextjs, chakra ui, react',
};
