import './globals.css';
import { cn } from '../lib/utils';
import { fontSans } from '../lib/fonts';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn('antialiased', fontSans.variable)}>{children}</body>
		</html>
	);
}
