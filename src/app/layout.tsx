import './globals.css';
import { cn } from '../lib/utils';
import { fontSans } from '../lib/fonts';
import Header from '../components/Header';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn('antialiased font-sans', fontSans.variable)}>
				<Header />
				<main className='relative  flex-1'>{children}</main>
			</body>
		</html>
	);
}
